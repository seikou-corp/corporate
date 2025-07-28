'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // For the home page, show ABOUT US as active
  const isHomeActive = pathname === '/'
  const isBusinessActive = isActive('/business')

  return (
    <header className="w-full relative z-[9999]">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="SEIKOU"
              width={150}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-cyan-400 hover:text-cyan-500 font-medium transition-colors py-1"
            >
              ABOUT US
              {isHomeActive && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <div className="relative group">
              <div className="text-gray-900 hover:text-gray-700 font-medium transition-colors py-1 flex items-center cursor-pointer relative">
                BUSINESS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isBusinessActive && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-1"
                    style={{
                      background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                    }}
                  />
                )}
              </div>
              <div className="z-[999] opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="relative">
                  {/* Triangle pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>
                  {/* Circle container with gradient border */}
                  <Link
                    href="/business/rakubo"
                    className="block relative p-[2px] rounded-full bg-gradient-to-r from-[#a9d3b2] to-[#fffd7a] transform transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <span className="text-center text-sm text-gray-700 font-medium">
                        Rakubo
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/company"
              className="relative text-gray-900 hover:text-gray-700 font-medium transition-colors py-1"
            >
              COMPANY
              {isActive('/company') && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <Link
              href="/recruit"
              className="pointer-events-none relative text-gray-300 hover:text-gray-700 font-medium transition-colors py-1"
            >
              RECRUIT
              {isActive('/recruit') && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <Link
              href="/news"
              className="pointer-events-none relative text-gray-300 hover:text-gray-700 font-medium transition-colors py-1"
            >
              NEWS
              {isActive('/news') && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <Link
              href="/contact"
              className="bg-[#fff36d] text-gray-900 px-8 py-3 font-medium hover:bg-[#a9d3b2] transition-colors flex items-center"
            >
              CONTACT
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </nav>

          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-white/30 backdrop-blur-xs transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
          <div 
            className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="p-6 space-y-6">
              {/* ABOUT US Section */}
              <div>
                <h3 className={`${isActive('/') ? 'text-cyan-400' : 'text-gray-900'} font-bold text-sm mb-3`}>ABOUT US</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      わたしたちのこと
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#business"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      事業内容
                    </Link>
                  </li>
                </ul>
              </div>

              {/* BUSINESS Section */}
              <div>
                <h3 className={`${isBusinessActive ? 'text-cyan-400' : 'text-gray-900'} font-bold text-sm mb-3`}>BUSINESS</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/business/rakubo"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/business/rakubo') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      Rakubo
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COMPANY Section */}
              <div>
                <h3 className={`${isActive('/company') ? 'text-cyan-400' : 'text-gray-900'} font-bold text-sm mb-3`}>COMPANY</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/company"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/company') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      メンバー
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#history"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/company') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      会社沿革
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-3 ${isActive('/company') ? 'text-cyan-400 bg-cyan-50' : 'text-gray-700'} hover:bg-gray-50 rounded transition-colors`}
                    >
                      会社概要
                    </Link>
                  </li>
                </ul>
              </div>

              {/* RECRUIT Section */}
              <div>
                <h3 className="text-gray-900/30 font-bold text-sm mb-3">RECRUIT</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="block py-2 px-3 text-gray-900/30">
                      募集要項
                    </span>
                  </li>
                </ul>
              </div>

              {/* NEWS Section */}
              <div>
                <h3 className="text-gray-900/30 font-bold text-sm mb-3">NEWS</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="block py-2 px-3 text-gray-900/30">
                      お知らせ
                    </span>
                  </li>
                </ul>
              </div>

              {/* CONTACT Button */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-[#fff36d] text-gray-900 px-6 py-3 text-center font-medium hover:bg-[#a9d3b2] transition-colors rounded-lg"
              >
                CONTACT
              </Link>
            </nav>
          </div>
      </div>

      {/* Top Wave SVG */}
      <div className="relative bottom-0">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1280 50" width="100%">
          <path
            d="M -217.6 41 C -57.6 41 -57.6 15 102.4 15 C 262.4 15 262.4 29 422.4 29 C 582.4 29 582.4 4 742.4 4 C 902.4 4 902.4 23 1062.4 23 C 1222.4 23 1222.4 3 1382.4 3 L 1280 0 L 0 0 Z"
            fill="#FFF"
          ></path>
        </svg>
      </div>
    </header>
  )
}
