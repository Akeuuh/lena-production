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
    <header className="bg-light shadow-sm sticky top-0 z-50 border-b border-sage/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Sophie Zen</span>
              <span className="ml-2 text-sm text-primary-600">Sophrologue</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-coral text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Prendre RDV
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-primary-700 hover:text-primary hover:bg-cream-100 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center bg-coral text-white px-3 py-2 rounded-md hover:bg-coral-600 font-medium shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header