import React from "react";
import Section from "./Section";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import baseUrl from "../api/baseUrl";
import toBangla from "../utility/toBangla";

export default async function HomeProducts() {
  const data = await fetch(`${baseUrl}/products`);
  const products = await data.json();

  const priceUpProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const priceDownProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  return (
    <>
      <Section
        title="আজ দাম বেড়েছে"
        products={priceUpProducts}
        sorting={false}
        icon={<FaCaretUp className="text-red-700" />}
      />
      <Section
        title="আজ দাম কমেছে"
        products={priceDownProducts}
        sorting={false}
        icon={<FaCaretDown className="text-green-700" />}
      />
      <Section
        id="all"
        title="সব পণ্য"
        products={products}
        subtitle={`মোট ${toBangla(products.length)}টি পন্য দেখানো হচ্ছে`}
        showSorting={true}
      />
    </>
  );
}
