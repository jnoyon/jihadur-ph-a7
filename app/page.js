import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import baseUrl from "./api/baseUrl";
import Hero from "./components/Hero";
import { Suspense } from "react";
import Loading from "./components/loading";
import Section from "./components/Section";
export default async function Homepage() {
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
    <div className="w-11/12 md:container min-h-screen mx-auto">
      <Hero />
      <Suspense fallback={<Loading />}>
        <Section
          title="আজ দাম বেড়েছে"
          products={priceUpProducts}
          sorting={false}
          icon={<FaCaretUp className="text-red-900" />}
        />
        <Section
          title="আজ দাম কমেছে"
          products={priceDownProducts}
          sorting={false}
          icon={<FaCaretDown className="text-green-900" />}
        />
        <Section
          id="all"
          title="সব পণ্য"
          products={products}
          subtitle={`মোট ${products.length} টি পন্য দেখানো হচ্ছে`}
          showSorting={true}
        />
      </Suspense>
    </div>
  );
}
