"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Header component with smooth scroll and mobile menu logic
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white hover:text-secondary transition-all duration-500">
          <Image
            src="/logo.png"
            alt="Waleed Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-2xl font-bold">Waleed</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-primary focus:outline-none transition-colors duration-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("service")}
                className="text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("project")}
                className="text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-600">
          <ul className="px-4 py-2">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={toggleServicesDropdown}
                className="block py-2 text-white hover:text-primary transition-all duration-500 w-full text-left"
              >
                Services
              </button>
              {servicesDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <a
                      onClick={() => scrollToSection("service1")}
                      className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
                    >
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("service2")}
                      className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
                    >
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("service3")}
                      className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
                    >
                      Service 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className="block py-2 text-white hover:text-primary transition-all duration-500 cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 bg-primary hover:bg-secondary text-white rounded-md text-center transition-all duration-500"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
