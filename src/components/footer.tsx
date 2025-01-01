import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="relative ">
                <Image
                  src="/desii.png"
                  alt="Food Blog Logo"
                  width={500}
                  height={500}
                  className='w-[100px] h-[100px] object-cover'
                />
              </div>
            </div>
            <p className="text-gray-300 max-w-xs mx-auto md:mx-0 ">
            Desi foods refer to the traditional cuisines originating from South Asia, India, Pakistan.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="w-5 h-5 text-lime-400 shadow-sm " />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram className="w-5 h-5 text-lime-400 shadow-sm" />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Twitter className="w-5 h-5 text-lime-400 shadow-sm" />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-lime-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-lime-500">
                  About
                </Link>
              </li>
             
              <li>
                <Link
                  href="#cards"
                  className="text-gray-200 hover:text-lime-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-lime-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white ">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-200 hover:text-lime-400">
                
                  Terms & Conditions
                
              </li>
              <li className="text-gray-200 hover:text-lime-400"
                >
                  Privacy Policy
              
              </li>
              <li className="text-gray-200 hover:text-lime-400"
                >
                  Cookie Policy
                
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-200 text-sm">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-lime-400 font-mono text-[17px]">DeSI CuiSIne</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}