import React, { useState } from "react";
import Logo from "../assets/logo1.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Bayskin Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[var(--primary-color)]">
              Services
            </a>
            <a href="#about" className="hover:text-[var(--primary-color)]">
              About
            </a>
            <a href="#gallery" className="hover:text-[var(--primary-color)]">
              Gallery
            </a>
            <a href="#contact" className="hover:text-[var(--primary-color)]">
              Contact
            </a>
            <a
              href="#book"
              className="ml-2 inline-block px-4 py-2 rounded-md bg-[var(--primary-color)] text-white font-medium"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-gray-300"
            >
              {isOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start p-4 gap-4 text-sm">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 border-b hover:text-[var(--primary-color)]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 border-b hover:text-[var(--primary-color)]"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 border-b hover:text-[var(--primary-color)]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 border-b hover:text-[var(--primary-color)]"
            >
              Contact
            </a>
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center px-4 py-2 rounded-md bg-[var(--primary-color)] text-white font-medium"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
