"use client";

import Link from "next/link";
import Logo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/faq"
                className="cursor-pointer text-gray-900 hover:text-gray-700 hover:underline font-medium transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/posts"
                className="cursor-pointer text-gray-900 hover:text-gray-700 hover:underline font-medium transition-colors"
              >
                Nachrichten
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-3/4 sm:max-w-sm h-full">
                <SheetHeader>
                  <SheetTitle className="text-left text-xl">Menü</SheetTitle>
                </SheetHeader>
                <nav className="mt-1 flex flex-col px-4">
                  <SheetClose asChild>
                    <Link
                      href="/faq"
                      className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors py-2"
                    >
                      FAQ
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/posts"
                      className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors py-2"
                    >
                      Nachrichten
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
