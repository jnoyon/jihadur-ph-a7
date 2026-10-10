import Hero from "./components/Hero";
import { Suspense } from "react";
import Loading from "./components/loading";
import HomeProducts from "./components/HomeProducts";
export default async function Homepage() {
  return (
    <div className="w-11/12 md:container min-h-screen mx-auto">
      <Hero />
      <Suspense fallback={<Loading />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
