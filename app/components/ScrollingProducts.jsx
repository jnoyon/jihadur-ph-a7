"use client";
import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";
import MarqueeText from "react-marquee-text";
import toBanglaUnit from "../utility/toBanglaUnit";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import toBangla from "../utility/toBangla";
import Loading from "./loading";

export default function ScrollingProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Products fetch error:", error);
      });
  }, []);

  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <MarqueeText direction="right" pauseOnHover={true} className="mb-5">
      {products.map((product) => (
        <div key={product.id} className="flex">
          {" "}
          <span className="ml-5"> {product.categoryIcon} </span>{" "}
          {product.nameBn}{" "}
          <span className="text-gray-700 ml-1">
            {" "}
            {toBangla(product.today)} টাকা / {toBanglaUnit(product.unit)}{" "}
          </span>
          <span className="ml-2">
            {product.change.dir === "up" ? (
              <span className="flex gap-1 items-center">
                <FaCaretUp className="text-red-600" />{" "}
                {toBangla(product.change.pct)}%
              </span>
            ) : (
              <span className="flex gap-1 items-center">
                <FaCaretDown className="text-green-600" />{" "}
                {toBangla(product.change.pct)}%
              </span>
            )}
          </span>
        </div>
      ))}
    </MarqueeText>
  );
}
