"use client";
import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";

export default function ScrollingProducts() {
  const [products, setSetProducts] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then((data) => setSetProducts(data));
  }, []);
  return (
    <marquee className="flex">
      {products.map((product) => (
        <div key={product.id}>{product.nameBn}</div>
      ))}
    </marquee>
  );
}
