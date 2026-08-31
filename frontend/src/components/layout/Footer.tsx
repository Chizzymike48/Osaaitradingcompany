import Link from "next/link";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import { CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/ossai-monogram.svg" alt="OSSAI Trading Company" width={40} height={40} className="h-10 w-10" />
              <h3 className="font-serif text-xl font-bold tracking-[0.13em]">OSSAI</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium furniture and interior design. Crafted to bring elegance
              and comfort to every space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">
              Categories
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="text-gray-400 text-xs mb-1">Phone</p>
                <Link
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </Link>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                <Link
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONFIG.whatsapp}
                </Link>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Email</p>
                <Link
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </Link>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Address</p>
                <p>{BUSINESS_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} OSSAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href={BUSINESS_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
