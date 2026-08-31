"use client";

import Link from "next/link";
import Image from "next/image";
import { House, LayoutGrid, Menu, MessageCircle, ShoppingBag, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home", icon: House },
    { href: "/products", label: "Collection", icon: LayoutGrid },
    { href: "/about", label: "Our Story", icon: Sparkles },
    { href: "/contact", label: "Contact", icon: MessageCircle },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#ddd7cc]/80 bg-[#f7f4ee]/95 shadow-[0_1px_0_rgba(28,28,26,0.03)] backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between sm:h-[4.75rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="flex items-center gap-2.5">
              <Image src="/ossai-monogram.svg" alt="OSSAI Trading Company" width={36} height={36} className="h-9 w-9" />
              <span className="font-serif text-lg font-bold tracking-[0.13em] text-foreground sm:text-xl">OSSAI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => {
              const Icon = link.icon;
              return <Link key={link.href} href={link.href} className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-accent"><Icon size={14} strokeWidth={1.8} className="text-accent transition-transform group-hover:-translate-y-0.5" />{link.label}</Link>;
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/products"
            className="btn-primary hidden min-h-0 gap-2 px-4 py-3 lg:inline-flex"
          >
            <ShoppingBag size={15} /> Buy Now
          </Link>

          {/* Mobile Menu Button */}
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-light bg-white text-foreground md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && <div className="border-t border-neutral-light py-4 md:hidden"><div className="grid grid-cols-2 gap-3">{links.map((link) => { const Icon = link.icon; return <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center gap-3 rounded-xl border border-neutral-light bg-white px-4 text-xs font-bold uppercase tracking-[0.08em]"><Icon size={17} className="shrink-0 text-accent" />{link.label}</Link>; })}</div></div>}
      </div>
    </nav>
  );
}
