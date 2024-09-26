"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io"; // Icon for dropdown arrow

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false); // Dropdown state for Property menu
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false); // Dropdown state for Property menu

  function handleNavigation() {
    setOpen(!open);
  }

  function togglePropertyDropdown() {
    setPropertyDropdownOpen(!propertyDropdownOpen);
  }

  function togglePagesDropdown() {
    setPagesDropdownOpen(!pagesDropdownOpen);
  }


  return (
    <div className="container-fluid bg-transparent">
      <nav className="navbar flex items-center justify-between bg-white py-4 px-4">
        {/* Logo and brand name */}
        <Link href="/" className="flex items-center text-center">
          <div className="p-2 mr-2">
            <img className="w-8 h-8" src="/img/icon-deal.png" alt="Icon" />
          </div>
          <h1 className="m-0 text-primary text-xl font-bold">SayRah</h1>
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          type="button"
          onClick={handleNavigation}
          className="block lg:hidden focus:outline-none"
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </button>

        {/* Menu Links for Desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/" className="nav-item nav-link text-lg hover:text-gray-600">
            HOME
          </Link>
          <Link href="/about" className="nav-item nav-link text-lg hover:text-gray-600">
            ABOUT
          </Link>

          {/* Property Dropdown for Desktop */}
          <div className="relative group">
            <button className="nav-link text-lg hover:text-gray-600 focus:outline-none">
              PROPERTY
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg">
              <Link href="/properties/property-list" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Property List
              </Link>
              <Link href="/properties/property-type" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Property Type
              </Link>
              <Link href="/property-agent" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Property Agent
              </Link>
            </div>
          </div>

          {/* Pages Dropdown for Desktop */}
          <div className="relative group">
            <button className="nav-link text-lg hover:text-gray-600 focus:outline-none">
              PAGES
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg">
              <Link href="/testimonial" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Review
              </Link>
              {/* <Link href="/404" className="block px-4 py-2 text-sm hover:bg-gray-100">
                404 Error
              </Link> */}
            </div>
          </div>

          <Link href="/contact" className="nav-item nav-link text-lg text-primary font-bold">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } lg:hidden w-full mt-4 transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className="block py-2 text-lg hover:text-gray-600">
            HOME
          </Link>
          <Link href="/about" className="block py-2 text-lg hover:text-gray-600">
            ABOUT
          </Link>

          {/* Property Dropdown for Mobile */}
          <div className="py-2">
            <button
              className="flex justify-between w-full text-lg py-2 hover:text-gray-600 focus:outline-none"
              onClick={togglePropertyDropdown}
            >
              PROPERTY <IoMdArrowDropdown className={`transition-transform ${propertyDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {propertyDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/properties/property-list"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  Property List
                </Link>
                <Link
                  href="/properties/property-type"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  Property Type
                </Link>
                <Link
                  href="/property-agent"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  Property Agent
                </Link>
              </div>
            )}
          </div>



          {/* Property Dropdown for Mobile */}
          <div className="py-2">
            <button
              className="flex justify-between w-full text-lg py-2 hover:text-gray-600 focus:outline-none"
              onClick={togglePagesDropdown}
            >
              PAGES <IoMdArrowDropdown className={`transition-transform ${pagesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {pagesDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/testimonial"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  Review
                </Link>
                
                {/* <Link
                  href="/404"
                  className="block py-2 text-sm hover:text-gray-600"
                >
                  404
                </Link> */}
              </div>
            )}
          </div>

          <Link href="/contact" className="block py-2 text-lg text-primary font-bold">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
}
