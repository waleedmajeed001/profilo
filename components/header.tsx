"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Fix incorrect IDs
  const sectionIds: Record<string, string> = {
    Home: "home",
    About: "about",
    Services: "service", // Fix: "service" instead of "services"
    Projects: "project", // Fix: "project" instead of "projects"
    Contact: "contact",
  };

  return (
    <header className="bg-black shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white hover:text-blue-400 transition-all duration-500">
          <Image src="/logo.png" alt="Waleed Logo" width={40} height={40} className="rounded-full object-cover" />
          <span className="text-2xl font-bold ml-2">Waleed</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md bg-black hover:bg-blue-500 transition-all duration-300 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <motion.svg
                key="close"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </motion.svg>
            )}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {Object.keys(sectionIds).map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(sectionIds[item])}
                  className="text-white hover:text-blue-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-black"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black border-t border-gray-700"
          >
            <ul className="px-4 py-4">
              {Object.keys(sectionIds).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(sectionIds[item])}
                    className="block w-full py-2 text-white text-lg text-center hover:text-blue-500 transition-all duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
