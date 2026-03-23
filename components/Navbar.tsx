"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  // 👇 Scroll logic for sticky booking bar (SSR-safe)
  useEffect(() => {
    // Make sure code only runs in the browser
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ NAVBAR (Fixed) */}
      <nav className="fixed  top-0 left-0 w-full bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#a7afbb]  z-50 shadow-sm flex items-center justify-between max-w-[1690px] mx-auto lg:px-20 px-6 py-2">
        <Link href="/">
          <Image src="/travio.png" alt="logo" width={44} height={39} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[14px] font-normal text-white flex items-center cursor-pointer pb-1.5 transition-all hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flex items-center hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Hamburger */}
        <Image
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-black text-sm font-medium hover:font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        )}
      </nav>

      {/* ✅ STICKY BOOKING BAR */}
      <div
        className={`fixed left-0 w-full z-[49] bg-gradient-to-r from-[#0f172a] to-[#1e293b] backdrop-blur-md  border rounded-3xl shadow-md z-40 transition-all duration-300 ${
          showBar
            ? "top-[70px] translate-y-0 opacity-100"
            : "top-[70px] -translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-[1640px] mx-auto flex items-center justify-between px-6 lg:px-20 py-3">
          {/* Price */}
          <span className="font-bold text-lg">₹12,999</span>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition">
              Select Date
            </button>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-lg text-sm hover:bg-cyan-300 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* 👇 Spacer to prevent content hiding under fixed navbar */}
      <div className="h-[60px]" />
    </>
  );
};

export default Navbar;
