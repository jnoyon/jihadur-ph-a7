import Hero from "./components/Hero";
import { Suspense } from "react";

import HomeProducts from "./components/HomeProducts";
import CardSkeleton from "./components/CardSkeleton";
export default async function Homepage() {
  return (
    <div className="w-11/12 md:container min-h-screen mx-auto">
      <Hero />
      <Suspense fallback={<CardSkeleton />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
