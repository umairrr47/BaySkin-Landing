import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand (logo only) */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Bayskin"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Nav (keep it lean) */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Socials (react-icons) */}
          <div className="flex items-center justify-center gap-3">
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/919810991225"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 border-t border-gray-100 pt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bayskin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
