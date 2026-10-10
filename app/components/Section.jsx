"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Section({
  id,
  title,
  subtitle,
  products,
  icon,
  showSorting,
}) {
  const [sort, setSort] = useState("default");
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-to-high") {
      return Number(a.today) - Number(b.today);
    }

    if (sort === "high-to-low") {
      return Number(b.today) - Number(a.today);
    }

    return 0;
  });
  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <div id={`${id}`}>
          <h2 className="text-xl font-bold flex items-center gap-1">
            {icon && icon} {title}{" "}
          </h2>

          <p> {subtitle} </p>
        </div>
        {showSorting && (
          <div className="flex items-center gap-2 mb-5">
            {" "}
            <label> সাজান </label>
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default"> ডিফল্ট </option>
              <option value="low-to-high"> দাম: কম থেকে বেশী </option>
              <option value="high-to-low"> দাম: বেশী থেকে কম </option>
            </select>
          </div>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
