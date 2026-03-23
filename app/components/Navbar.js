// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav style={{ display: "flex", gap: "20px" }}>
//       <Link href="/">Home</Link>
//       <Link href="/login">Login</Link>
//       <Link href="/signup">Signup</Link>
//       <Link href="/contact">Contact</Link>
//       <Link href="/courses">Courses</Link>
//       <Link href="/profile">Profile</Link>
//     </nav>
//   );
// }









"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
    { name: "Contact", href: "/contact" },
    { name: "Courses", href: "/courses" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-[#0f3d3e] shadow-md fixed w-full z-50">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          
          {/* Logo / Brand
          <div className="flex-shrink-0 font-bold text-xl">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            AYUSH YOGI
          </div> */}

          <div className="flex items-center gap-2 font-bold text-xl">
           <Image src="/logo.png" alt="logo" width={32} height={32} />
           <span>AYUSH YOGI</span>
            </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white-700 hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}