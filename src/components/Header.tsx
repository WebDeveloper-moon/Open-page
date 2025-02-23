import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=150&q=80"
              alt="Header visual"
              className="h-12 w-12 rounded-full object-cover"
            />
            <nav className="hidden ml-10 space-x-8 md:flex">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Products
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <div className="py-3">
                <button className="w-full inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}