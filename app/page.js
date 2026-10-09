import baseUrl from "./api/baseUrl";
import Hero from "./components/Hero";
import Section from "./components/Section";

export default async function Homepage() {
  const data = await fetch(`${baseUrl}/products`);
  const products = await data.json();

  return (
    <div className="w-11/12 md:container min-h-screen mx-auto">
      <Hero />
      <Section
        id="all"
        title="সব পণ্য"
        products={products}
        subtitle={`মোট ${products.length} টি পন্য দেখানো হচ্ছে`}
        sorting={true}
      />
    </div>
  );
}
