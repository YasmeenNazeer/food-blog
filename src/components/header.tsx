"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold font-sans">Desi Tadka</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-lime-400">Home</Link>
          <Link href="#cards" className="hover:text-lime-400">Blogs</Link>
          <Link href="/about" className="hover:text-lime-400">About Us</Link>
          <Link href="/contact" className="hover:text-lime-400">Contact Us</Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-lime-400">Home</Link>
          <Link href="#cards" className="block hover:text-lime-400">Blog</Link>
          <Link href="/about" className="block hover:text-lime-400">About Us</Link>
          <Link href="/contact" className="block hover:text-lime-400">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
