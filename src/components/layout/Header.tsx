'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-primary/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-light/20">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-coral/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-sage/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <span className="text-3xl font-bold text-light group-hover:text-cream transition-colors duration-300">
                  Sophie Zen
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
              </div>
              <span className="ml-3 text-sm text-cream/80 font-medium bg-light/10 backdrop-blur-sm px-3 py-1 rounded-full border border-light/20">
                Sophrologue
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-cream hover:text-light transition-all duration-300 font-medium text-lg group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-coral text-light px-6 py-3 rounded-full hover:bg-coral-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Prendre RDV
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-light hover:text-cream focus:outline-none transition-all duration-300 hover:bg-light/10 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="bg-primary-800 border-t border-light/20 shadow-inner">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-cream hover:text-light hover:bg-light/10 rounded-lg font-medium transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block w-full text-center bg-coral text-light px-4 py-3 rounded-lg hover:bg-coral-600 font-medium shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header