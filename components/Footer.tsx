"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#484d58] text-white px-6 lg:px-20 py-12">
      {/* Top Section: Logo + Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo & description */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image src="/travio.png" alt="Trovia Logo" width={120} height={50} />
          </Link>
          <p className="text-gray-400 max-w-sm">
            Explore breathtaking destinations and plan your next adventure with Trovia.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Company</h4>
            <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
            <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Support</h4>
            <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
            <Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4 mt-1">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Trovia. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;