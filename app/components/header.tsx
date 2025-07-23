'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // For the home page, show ABOUT US as active
  const isHomeActive = pathname === '/'
  const isBusinessActive = isActive('/business')

  return (
    <header className="w-full relative z-50">
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
                  className="absolute -bottom-3 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <div className="relative group">
              <div className="text-gray-900 hover:text-gray-700 font-medium transition-colors py-1 flex items-center cursor-pointer relative">
                BUSINESS/SERVICES
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
                    className="absolute -bottom-3 left-0 right-0 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                    }}
                  />
                )}
              </div>
              <div className="z-[999] hidden group-hover:block absolute top-full left-0 pt-2">
                <div className="w-48 bg-white rounded-md shadow-xl border border-gray-200 py-1">
                  <Link
                    href="/business/rakubo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Rakubo
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
                  className="absolute -bottom-3 left-0 right-0 h-1 rounded-full"
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
                  className="absolute -bottom-3 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #a9d3b2 0%, #fffd7a 100%)',
                  }}
                />
              )}
            </Link>
            <Link
              href="/news"
              className="relative text-gray-900 hover:text-gray-700 font-medium transition-colors py-1"
            >
              NEWS
              {isActive('/news') && (
                <div
                  className="absolute -bottom-3 left-0 right-0 h-1 rounded-full"
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

          <button className="md:hidden flex items-center">
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

      {/* Top Wave SVG */}
      <div className="relative bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 50" width="100%">
          <path
            d="M -217.6 41 C -57.6 41 -57.6 15 102.4 15 C 262.4 15 262.4 29 422.4 29 C 582.4 29 582.4 4 742.4 4 C 902.4 4 902.4 23 1062.4 23 C 1222.4 23 1222.4 3 1382.4 3 L 1280 0 L 0 0 Z"
            fill="#FFF"
          ></path>
        </svg>
      </div>
    </header>
  )
}
