import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import toBangla from "../utility/toBangla";
import toBanglaUnit from "../utility/toBanglaUnit";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-2 rounded-md border-gray-200 border hover:border-amber-600">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-gray-200 p-2 rounded-md">{product.image}</div>
        <p>
          <b className="text-xl">{product.nameBn}</b> <br /> প্রতি{" "}
          {toBanglaUnit(product.unit)}
        </p>
      </div>
      <h1> আজকের দাম </h1>
      <div className="flex justify-between">
        <p>
          <span className="text-2xl font-bold">{toBangla(product.today)} </span>{" "}
          টাকা
        </p>
        <p className="bg-gray-300 rounded-xl px-2">
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
        </p>
      </div>
    </div>
  );
}
