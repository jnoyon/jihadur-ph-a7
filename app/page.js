import Hero from "./components/Hero";
import { Suspense } from "react";

import HomeProducts from "./components/HomeProducts";
import CardSkeleton from "./components/CardSkeleton";
export default async function Homepage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<CardSkeleton />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
