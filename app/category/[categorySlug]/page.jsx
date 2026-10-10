import Link from "next/link";
import { Suspense } from "react";

import baseUrl from "../../api/baseUrl";
import Section from "../../components/Section";
import Loading from "../../components/loading";
import toBangla from "../../utility/toBangla";

const categoryProducts = async (categorySlug) => {
  const res = await fetch(
    `${baseUrl}/products?category=${encodeURIComponent(categorySlug)}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  return res.json();
};

async function CategoryContent({ params }) {
  const { categorySlug } = await params;

  const products = await categoryProducts(categorySlug);

  const currentCategory = products[0];

  return (
    <>
      <div className="flex gap-2">
        <Link className="text-blue-600" href="/">
          হোম
        </Link>

        <span>&gt;&gt;</span>

        <p>{currentCategory?.categoryNameBn}</p>
      </div>

      <div className="flex items-center gap-2 mb-3 bg-white p-3 border border-gray-300 rounded-md my-3">
        <div className="bg-gray-200 p-2 rounded-md">
          {currentCategory?.categoryIcon}
        </div>

        <p>
          <b className="text-xl">{currentCategory?.categoryNameBn}</b>

          <br />

          <span>{toBangla(products.length)}টি পণ্যের দাম ও পরিবর্তন</span>
        </p>
      </div>

      <Section products={products} showSorting={true} />
    </>
  );
}

export default function CategoryPage({ params }) {
  return (
    <div className="w-11/12 mx-auto">
      <Suspense fallback={<Loading />}>
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
}
