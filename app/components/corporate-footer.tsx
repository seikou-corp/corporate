'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CorporateFooter() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <footer className="relative w-full mt-20 top-20">
      <svg
        className="absolute top-[1px] w-full md:w-full h-5 md:h-15 xl:h-24 -translate-y-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#a9d3b2' }} />
            <stop offset="33%" style={{ stopColor: '#c4e6a6' }} />
            <stop offset="66%" style={{ stopColor: '#f0f89d' }} />
            <stop offset="100%" style={{ stopColor: '#fffd7a' }} />
          </linearGradient>
        </defs>
        <path
          d="M0,100 L0,40 Q180,0 360,40 T720,40 Q900,0 1080,40 T1440,40 L1440,100 Z"
          fill="url(#waveGradient)"
        />
      </svg>

      <div
        className="relative"
        style={{
          background: 'linear-gradient(90deg, #a9d3b2 0%, #c4e6a6 33%, #f0f89d 66%, #fffd7a 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className={`${isActive('/') ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>ABOUT US</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className={`${isActive('/') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}>
                    わたしたちのこと
                  </Link>
                </li>
                <li>
                  <Link href="/#business" className={`${isActive('/') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}>
                    事業内容
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${isActive('/business') ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>BUSINESS</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/business/rakubo"
                    className={`${isActive('/business/rakubo') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}
                  >
                    Rakubo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${isActive('/company') ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/company"
                    className={`${isActive('/company') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}
                  >
                    メンバー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company#history"
                    className={`${isActive('/company') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}
                  >
                    会社沿革
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company#profile"
                    className={`${isActive('/company') ? 'text-white' : 'text-gray-900'} hover:text-cyan-400 transition-colors`}
                  >
                    会社概要
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900/30 pointer-events-none text-lg font-bold mb-6">
                RECRUIT
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/recruit"
                    className="text-gray-900/30 pointer-events-none hover:text-cyan-400 transition-colors"
                  >
                    募集要項
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900/30 pointer-events-none text-lg font-bold mb-6">NEWS</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/news"
                    className="text-gray-900/30 pointer-events-none hover:text-cyan-400 transition-colors"
                  >
                    お知らせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-700/20">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="SEIKOU"
                width={200}
                height={80}
                className="h-16 w-auto mr-4"
              />
              <div className="text-gray-900 text-sm">
                <p>株式会社 SEIKOU</p>
                <p>〒178-0061 東京都練馬区大泉学園町6-19-40 サンキビル2F</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <Link
                href="/contact"
                className="bg-indigo-900 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-800 transition-colors flex items-center mb-4"
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
              <p className="text-gray-900 text-sm">©SEKOU.Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
