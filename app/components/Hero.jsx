import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="bg-white border mb-5 border-gray-200 rounded-md flex flex-col-reverse md:flex-row justify-between p-3 md:p-5 items-center">
      <div className="md:w-1/2">
        <p className="bg-green-200 mb-2 inline-block px-5 rounded-md text-green-600">
          {" "}
          তারিখ{" "}
        </p>
        <h1 className="text-4xl font-bold mb-3"> আজকের বাজারের দাম এক নজরে </h1>
        <p className="mb-3 text-xl text-gray-600">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস ডিম ও মসলার দাম - বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন সব এক জায়গায়
        </p>
        <a href="#all" className="btn bg-green-700 text-white">
          {" "}
          সব পণ্য দেখুন{" "}
        </a>
      </div>
      <Image
        src="/bazar-hero.png"
        width={360}
        height={360}
        alt="Hero"
        priority
      />
    </div>
  );
}
