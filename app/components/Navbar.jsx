"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";
import ScrollingProducts from "./ScrollingProducts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
function NavbarContent() {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);

  const [date, setDate] = useState("");
  useEffect(() => {
    fetch(`${baseUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  return (
    <header className="mb-5 bg-white border-b border-gray-300">
      <div className="container mx-auto navbar flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-green-400 p-4 rounded-xl">
            <Image src="/logo-icon.png" height={10} width={10} alt="Logo" />
          </div>
          <div className="text">
            <Link href="/" className="text-xl font-bold">
              বাজার দর
            </Link>
            <p className="text-sm text-gray-600"> {date} </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <ul className="flex items-center gap-2">
              <li>
                {" "}
                <Link href="/signin" className="btn btn-success">
                  {" "}
                  লগিন{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/signup" className="btn btn-success">
                  {" "}
                  সাইন আপ{" "}
                </Link>{" "}
              </li>
            </ul>
            <div className="hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">{/* /* icon  */}</div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto">
        <ul className="flex gap-6 py-5 overflow-x-auto whitespace-nowrap">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <li key={category.id}>
                <Link
                  href={href}
                  className={`px-3 py-1 rounded-xl transition-colors ${
                    isActive
                      ? "bg-green-600 font-bold text-white"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {category.icon} {category.nameBn}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ScrollingProducts />
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<Loading />}>
      <NavbarContent />
    </Suspense>
  );
}
