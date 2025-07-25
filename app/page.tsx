'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden pb-50">
      {/* Top gradient area */}
      <div
        className="w-full pb-[500px] md:pb-[700px] relative -mt-[1px] pt-12"
        style={{ background: 'linear-gradient(90deg, #a5e0b4 0%, #fff36c 100%)' }}
      >
        {/* Background pattern overlay */}
        <div className="absolute top-[110px] inset-0 pointer-events-none">
          <Image
            src="/images/about/about-01_top-bg01.png"
            alt=""
            width={1920}
            height={800}
            className="w-full object-contain opacity-100"
          />
        </div>

        {/* Header illustration with animation */}
        <div
          className={`relative z-10 pt-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-5xl mx-auto px-4">
            <Image
              src="/images/about/about-01_top01.png"
              alt=""
              width={800}
              height={400}
              className="mx-auto w-full max-w-3xl h-auto"
            />
          </div>
        </div>

        <div className="-top-10 z-50 relative max-w-5xl mx-auto px-4 text-center">
          {/* Header text with staggered animation */}
          <div className="mb-12 flex flex-col gap-2 place-items-center">
            <h3
              className={`bg-white px-12 py-3 text-3xl md:text-4xl font-bold text-[#272859] mb-3 transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              EC運営ビジネスに
            </h3>
            <h3
              className={`bg-white px-12 py-3 text-3xl md:text-4xl font-bold text-[#272859] mb-3 transition-all duration-700 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              もっと
            </h3>
            <h3
              className={`bg-white px-12 py-3 text-3xl md:text-4xl font-bold text-[#272859] transition-all duration-700 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              スピードと創造的な価値を
            </h3>
          </div>
        </div>
      </div>

      <div className="relative -top-[650px] md:-top-[900px]">
        <div className="h-[400px] md:h-[500px] flex flex-col">
          <img
            src="/images/about/about-2waves-bg.svg"
            alt="wavy background"
            width="100%"
            height="100%"
            className="object-fill pointer-events-none"
          />
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0.30)] to-white w-full h-full inline-block"></div>
        </div>
        <Image
          src="/images/about/about-01_top-whiteline01.png"
          alt="ABOUT US"
          width={2560}
          height={1211}
          className={`absolute w-screen -translate-y-1/2 transition-all duration-700 delay-800 ${
            isLoaded ? 'top-[126px] opacity-100 scale-100' : '-top-[150px] opacity-0 scale-150'
          }`}
        />

        {/* ABOUT US image */}
        <div className="absolute top-[150px] sm:top-[155px] md:top-[230px] lg:top-[255px] w-full z-50">
          <Image
            src="/images/about/about-01_aboutus.png"
            alt="ABOUT US"
            width={400}
            height={150}
            className={`px-8 md:px-0 mx-auto transition-all duration-700 delay-800 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          {/* Company description */}
          <p
            className={`mt-10 text-[#272859] text-base sm:text-lg md:text-xl max-w-3xl text-center mx-auto leading-relaxed transition-all duration-700 delay-900 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            株式会社 SEIKOU は、
            <br className="block sm:hidden" />
            東京都練馬区に拠点を置く、
            <br />
            ECビジネスに特化した
            <br className="block sm:hidden" />
            ITソリューション企業です。
          </p>
        </div>

        <div className="bg-white relative mx-auto px-4 w-full pt-[30px] sm:pt-[20px] pb-[0px] sm:pb-[20px]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className={`text-center lg:text-left transition-all duration-1000 delay-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#272859] mb-6 leading-relaxed!">
                3つのチカラで
                <br />
                お客様の
                <br />
                ビジネスの現場を解決します
              </h2>
            </div>

            {/* Right side bubbles in triangular layout */}
            <div className="flex justify-center items-center">
              <div className="scale-70 sm:scale-100 -mt-[50px] -mb-[50px] sm:mt-auto sm:mb-auto">
                <div className="relative w-[495px] h-[385px]">
                  {/* IT Solution - top center */}
                  <div
                    className={`absolute top-4 left-0 transition-all duration-1000 delay-1100 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className="relative group">
                      <img
                        src="/images/about/about-01_bubble-it.svg"
                        alt="IT Solution"
                        className="w-[220px] h-auto transform group-hover:scale-110 transition-transform duration-300 animate-float"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                        <div className="text-center relative -top-3">
                          <p className="text-5xl mb-1">IT</p>
                          <p className="text-base">Solution</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Creative - bottom left */}
                  <div
                    className={`absolute bottom-0 left-6 transition-all duration-1000 delay-1300 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className="relative group">
                      <img
                        src="/images/about/about-01_bubble-creative.svg"
                        alt="Creative"
                        className="w-[260px] h-auto transform group-hover:scale-110 transition-transform duration-300 animate-float-slow"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                        <p className="text-4xl mb-1">Creative</p>
                        <p className="text-base">Design</p>
                      </div>
                    </div>
                  </div>

                  {/* E-commerce - top right */}
                  <div
                    className={`absolute top-14 right-0 transition-all duration-1000 delay-1200 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className="relative group">
                      <img
                        src="/images/about/about-01_bubble-sales.svg"
                        alt="E-commerce"
                        className="w-[240px] h-auto transform group-hover:scale-110 transition-transform duration-300 animate-float-delayed"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                        <div className="text-center relative -top-1">
                          <p className="text-3xl mb-1">E-commerce</p>
                          <p className="text-base">Sales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[150px] relative z-1 max-w-7xl mx-auto px-4 text-[#272859]">
          {/* Service Items with Curved Yellow Lines */}
          <div className="relative">
            {/* E-commerce Section */}
            <div className="relative mb-10">
              <div className="relative z-10 text-center">
                <div className="flex flex-col items-center">
                  <h3 className="font-mplus-rounded bg-white/80 md:bg-transparent px-8 py-4 text-5xl font-thin inline">
                    E-commerce
                  </h3>
                  <p className="mb-4 bg-white/80 p-8 leading-relaxed inline-block">
                    長年にわたる輸入・小売業で培った経験と、
                    <br />
                    自社ECサイト「ジュエリーミュージアム」運営で得た実践的なノウハウを活かし、
                    <br />
                    EC事業の効率化を追求するためにシステム開発に特化しました。
                  </p>
                  <div className="mt-5 flex justify-center">
                    <Image
                      src="/images/about/about-01_plus.png"
                      alt="E-commerce Mobile"
                      width={77}
                      height={77}
                      className={`relative z-10 transition-all duration-700 ${
                        isLoaded
                          ? 'opacity-100 scale-100 rotate-0'
                          : 'opacity-0 scale-50 rotate-180'
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-[110px] md:top-0 -right-[30px] md:right-0 scale-70 lg:scale-100 pointer-events-none">
                <img
                  src="/images/about/about-01_mobile.png"
                  alt="E-commerce Mobile Shadow"
                  width={200}
                  height={400}
                  className={`transform transition-transform duration-300 animate-float-slow relative z-1 -top-[40px]`}
                />
                <Image
                  src="/images/about/about-01_mobile-shadow.png"
                  alt="E-commerce Mobile"
                  width={200}
                  height={400}
                  className={`relative z-0 -top-[70px] transition-all duration-1000 delay-100 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
                  }`}
                />
              </div>
            </div>

            {/* Creative Section */}
            <div className="relative mb-10 z-0">
              <div className="relative z-10 text-center">
                <div className="flex flex-col items-center">
                  <h3 className="font-mplus-rounded text-5xl font-thin mb-4">Creative</h3>
                  <p className="mb-4 bg-white/80 p-8 leading-relaxed inline-block">
                    アニメーション制作、Webサイト制作
                    <br />
                    自社ECサイト「ジュエリーミュージアム」の商品開発、
                    <br />
                    多岐にわたる実績を有しています。
                    <br />
                    <br />
                    東映アニメーション株式会社様には、
                    <br />
                    人気アニメーション作品における
                    <br />
                    システム開発や自動化システムの開発・提供を通じて、
                    <br />
                    貢献させていただいております。
                  </p>
                  <div className="mt-5 flex justify-center">
                    <Image
                      src="/images/about/about-01_plus.png"
                      alt="E-commerce Mobile"
                      width={77}
                      height={77}
                      className={`relative z-10 transition-all duration-700 ${
                        isLoaded
                          ? 'opacity-100 scale-100 rotate-0'
                          : 'opacity-0 scale-50 rotate-180'
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[300px] lg:top-[330px] scale-70 lg:scale-100 z-0 -left-[40px] lg:left-0 pointer-events-none">
                <img
                  src="/images/about/about-01_desktop.png"
                  alt="Creative Desktop"
                  width={320}
                  height={270}
                  className={`transform transition-transform duration-300 animate-float relative z-1`}
                />
                <Image
                  src="/images/about/about-01_desktop-shadow.png"
                  alt="Creative Desktop Shadow"
                  width={200}
                  height={400}
                  className={`relative z-0 -top-[30px] left-[40px] transition-all duration-1000 delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
                  }`}
                />
              </div>
            </div>

            {/* IT Solutions Section */}
            <div className="relative z-50">
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <h3 className="font-mplus-rounded bg-white/80 md:bg-transparent px-8 py-4 text-5xl font-thin inline">
                    IT Solutions
                  </h3>
                  <p className="mb-4 bg-white/80 p-8 leading-relaxed inline-block">
                    ECサイト運営の効率化を支援する
                    <br />
                    自社サービス「Rakubo」の開発・提供に加え、
                    <br />
                    大手企業様のシステム開発や
                    <br />
                    自動化システムの開発・提供も行っています。
                  </p>
                  <p className="text-2xl text-gray-700 mt-14 font-normal leading-relaxed">
                    EC運営で培った豊富な経験と、クリエイティブ力を融合し
                    <br />
                    お客様のビジネスを総合的に支援できる点が強みです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative z-0 -top-[200px] bg-gradient-to-b from-[#FFFFFF] via-[#d4e8a5] to-[#a5e0b4] pt-20 text-[#272859]">
          <Image
            src="/images/about/about-01_mission.png"
            alt="MISSION"
            width={700}
            height={100}
            className={`mt-[300px] w-[400px] sm:w-[500px] md:w-[600px] xl:w-[700px] mb-12 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Left side - Mission content */}
            <div className="relative z-50">
              <h3 className="leading-relaxed! text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                EC運営者の「効率化」を最大化し、
                <br />
                ビジネスの成長を加速する。
              </h3>
              <p className="text-[0.85rem] md:text-base leading-[2rem]">
                長年の輸入・小売業を通じてマイナス要因を減らし、私たちは仕入・運営の機能を最適化しました。
                <br />
                「日々の課題解決に追われ、本来のマーケティング戦略に時間を割けないお客様」
                <span className="inline sm:hidden">、</span>
                <br className="hidden sm:block" />
                その悩み、私たちは解決します。EC運営のプロフェッショナルとして、
                <br className="hidden sm:block" />
                マーケター・クリエーターとして蓄積してきた知見をビジネスに実装します。
                <br />
                EC運営者の皆様が、創造的な仕事に集中できる未来を目指し続けて下さい。
              </p>
            </div>

            {/* Right side - Mission icon */}
            <div className="absolute z-0 right-0 -top-[50px] sm:-top-[100px]">
              <img
                src="/images/about/about-01_mission-icon.png"
                alt="Mission Icon"
                width={300}
                height={300}
                className={`w-[200px] sm:w-[300px] xl:w-[400px] transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </div>
          </div>

          <Image
            src="/images/about/about-01_vision.png"
            alt="VISION"
            width={700}
            height={100}
            className={`relative z-50 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[700px] ml-auto mt-[100px] mb-12 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          />

          {/* Vision Section */}
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="relative">
              {/* Right side - Vision content */}
              <div className="text-right relative z-50">
                <h3 className="leading-relaxed! text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                  EC運営に関わる全ての人を&emsp;
                  <br />
                  創造的な仕事に集中できる世界へ。
                </h3>
                <p className="text-[0.85rem] md:text-base leading-[2rem] mb-8">
                  自社サービス「Rakubo」開発・提供を通して、
                  <br />
                  EC運営の効率化を実現させるよう目指します。
                  <br />
                  EC運営に「もっとラク」を提供することで、
                  <br />
                  皆様がより創造的な取り組みに集中できるようになり、
                  <br />
                  そして、結果的に業績向上にも繋がると信じています。
                  <br />
                  新しい価値創造に時間を使えるようになる
                  <br className="block sm:hidden" />
                  世界を目指します。
                </p>
              </div>
              <div className="absolute z-0 -left-[50px] sm:-left-[40px] lg:left-0 top-[350px] sm:-top-[10px] lg:-top-[30px]">
                <div className="">
                  <Image
                    src="/images/about/about-01_vision-icon.png"
                    alt="Rakubo"
                    width={350}
                    height={350}
                    className={`w-[270px] sm:w-[40vw] lg:w-[450px] mb-4 transition-all duration-700 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="text-center mt-[250px] lg:mt-[180px] sm:mt-12">
              <button className="bg-[#212369] text-white tracking-wider text-base sm:text-lg font-normal py-4 px-12 rounded-full transition-colors relative top-0 translate-y-1/2">
                ミッションの実現を通じ、EC業界全体の発展に貢献します。
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {/* Fix offset for content */}
      <div id="business" className="-top-[750px] md:-top-[900px] relative -mb-[650px] md:-mb-[900px] ">
        <div className="relative mb-8 md:mb-16 gap-0 flex- flex-col">
          <div className="flex flex-col md:flex-row md:items-end max-w-6xl mx-auto">
            <h2 className="ml-5 xl:ml-3 font-mplus-rounded relative -bottom-[1.7rem] md:-bottom-[2rem] text-[#272859] text-[5rem] md:text-[6rem] font-thin">
              CONTENT
            </h2>
            <div className="block md:hidden top-0 -left-[0] w-9/10 z-10 border border-[#272859]"></div>
            <span className="text-xl font-semibold tracking-[0.5rem] pl-[30px] md:pl-[70px] pb-[15px]">
              事業内容
            </span>
          </div>
          <div className="hidden md:block top-0 -left-[0] w-6/10 z-10 border border-[#272859]"></div>
        </div>

        {/* Rakubo */}
        <div className="max-w-6xl mx-auto px-4 text-[#272859] flex flex-wrap gap-12">
          <div className="relative bg-[#f4f3f0] overflow-hidden">
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Left side - Product showcase (3/5 width) */}
              <div className="md:col-span-3 p-12 border-r border-gray-100">
                <h3 className="px-4 text-2xl font-bold mb-5">ECサイトジュエリーミュージアム</h3>
                <div
                  className="mb-5"
                  style={{
                    backgroundImage: 'url(/images/about/border-dots-s.png)',
                    backgroundRepeat: 'repeat-x',
                    height: '7px',
                  }}
                ></div>
                <p className="px-4 text-base mb-8 leading-[2rem] tracking-wider">
                  <span className="font-bold">
                    ジュエリーミュージアムは、お客様に「特別な輝き」をお届けする、アレルギー対応・高品質ジュエリーのオンラインショップです。
                  </span>
                  <br />
                  長年のECサイト運営で培った経験と、
                  <span className="font-bold">楽天年間ランキングで5年連続１位</span>
                  を獲得したネックレスチェーンをはじめとする確かな実績が、私たちの品質とデザイン力を証明しています。
                  独自のデザインと厳選された素材を追求し、お客様一人ひとりの日常に寄り添う特別なジュエリーを提供。また、新しいシルクブランド「Sugar
                  and Pepper」も好評発売中です。
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-4 px-4">
                  <a
                    href="https://www.instagram.com/jewelrymuseum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#272859] text-white rounded-full hover:bg-[#424ea4] hover:shadow-lg transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/jewelrymuseum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#272859] text-white rounded-full hover:bg-[#424ea4] hover:shadow-lg transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="white"
                    >
                      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://line.me/ti/p/@jewelrymuseum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#272859] text-white rounded-full hover:bg-[#424ea4] hover:shadow-lg transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M10.993,20.853l-0.001-1.88	l-0.56-0.013c-5.237-0.427-9.435-3.973-9.435-8.466C0.997,5.733,5.803,2,11.493,2c5.717,0,10.496,3.707,10.496,8.493	c0,2.88-2.247,5.76-4.555,7.853c-1.803,1.653-3.659,2.826-4.793,3.333l-0.047,0.027l-0.24,0.08	C11.699,22.04,10.993,21.56,10.993,20.853z M7.979,12.493c0-0.267-0.225-0.493-0.5-0.493H5.991V8.493C5.991,8.227,5.766,8,5.491,8	c-0.276,0-0.5,0.227-0.5,0.493v4c0,0.28,0.224,0.507,0.5,0.507h1.988C7.754,13,7.979,12.773,7.979,12.493z M9.991,12.493v-4	C9.991,8.227,9.766,8,9.491,8c-0.276,0-0.5,0.227-0.5,0.493v4c0,0.28,0.224,0.507,0.5,0.507C9.766,13,9.991,12.773,9.991,12.493z M11.993,12.493v-1.867l1.044,2.093c0.233,0.466,0.948,0.307,0.948-0.227v-4c0-0.267-0.225-0.493-0.5-0.493	c-0.276,0-0.5,0.227-0.5,0.493v1.88l-1.045-2.107c-0.233-0.466-0.947-0.293-0.947,0.227v4c0,0.28,0.224,0.507,0.5,0.507	C11.767,13,11.993,12.773,11.993,12.493z M17.979,12.493c0-0.267-0.225-0.493-0.5-0.493h-1.485v-1h1.485	c0.275,0,0.5-0.227,0.5-0.507c0-0.267-0.225-0.493-0.5-0.493h-1.485V9h1.485c0.275,0,0.5-0.227,0.5-0.507	c0-0.267-0.225-0.493-0.5-0.493h-1.985c-0.276,0-0.5,0.227-0.5,0.493v4c0,0.28,0.224,0.507,0.5,0.507h1.985	C17.754,13,17.979,12.773,17.979,12.493z"></path>
                    </svg>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 px-4">
                  <a
                    href="https://www.rakuten.co.jp/seikou-kids/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-[250px] bg-gradient-to-r from-[#a5deb3] to-[#fff36c] font-semibold px-12 py-4 rounded-full text-base hover:shadow-lg transition-all flex items-center gap-4 cursor-pointer">
                      楽天店
                      <Image
                        src="/images/about/about-01_arrow-r.png"
                        className="ml-auto"
                        alt="Arrow"
                        width={10}
                        height={10}
                      />
                    </button>
                  </a>
                  <a
                    href="https://www.jewelry-museum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-[250px] bg-gradient-to-r from-[#a5deb3] to-[#fff36c] font-semibold px-12 py-4 rounded-full text-base hover:shadow-lg transition-all flex items-center gap-4 cursor-pointer">
                      オフィシャル店
                      <Image
                        src="/images/about/about-01_arrow-r.png"
                        className="ml-auto"
                        alt="Arrow"
                        width={10}
                        height={10}
                      />
                    </button>
                  </a>
                </div>
              </div>

              {/* Right side - Rakubo showcase (2/5 width) */}
              <div className="md:col-span-2 pl-16 md:pl-0 pt-8 md:pt-16 pr-16 pb-16 md:pb-8">
                <a
                  href="https://www.rakuten.co.jp/seikou-kids/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/about/about-01_business-jewelry-museum.png"
                    alt="Jewelry 1"
                    width={200}
                    height={200}
                    className="w-full hover:opacity-60"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-[#f4f3f0] overflow-hidden">
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Left side - Product showcase (3/5 width) */}
              <div className="md:col-span-3 p-12 border-r border-gray-100">
                <h3 className="px-4 text-2xl font-bold mb-5">Rakubo ＜ラクーボ＞</h3>
                <div
                  className="mb-5"
                  style={{
                    backgroundImage: 'url(/images/about/border-dots-s.png)',
                    backgroundRepeat: 'repeat-x',
                    height: '7px',
                  }}
                ></div>
                <p className="px-4 text-base mb-8 leading-[2rem] tracking-wider">
                  <span className="font-bold">
                    Rakuboは、楽天市場やShopifyのネットショップ運営を「もっと楽に、もっと効率的に」変革する、オールインワン業務支援アプリです。
                  </span>
                  <br />
                  日々の煩雑な作業に追われ、本来注力すべき戦略や創造的な仕事に時間を割けない――そんなEC運営者の皆様の課題を、Rakuboが解決します。
                  <span className="font-bold">AIと自動化</span>
                  の力で、楽天ランキングバナーの自動表示、高評価レビューの自動掲載、HTML知識不要の特集ページ作成、複雑なセール設定まで、あらゆる業務を効率化。
                </p>

                <div className="flex gap-4 px-4">
                  <a href="https://www.rakubo.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-[250px] bg-gradient-to-r from-[#a5deb3] to-[#fff36c] font-semibold px-12 py-4 rounded-full text-base hover:shadow-lg transition-all flex items-center gap-4 cursor-pointer">
                      Rakubo を詳しく
                      <Image
                        src="/images/about/about-01_arrow-r.png"
                        alt="Arrow"
                        className="ml-auto"
                        width={10}
                        height={10}
                      />
                    </button>
                  </a>
                </div>
              </div>

              {/* Right side - Rakubo showcase (2/5 width) */}
              <div className="md:col-span-2 pl-16 md:pl-0 pt-8 md:pt-16 pr-16 pb-16 md:pb-8">
                <a href="https://www.rakubo.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/about/about-01_business-Rakubo.png"
                    alt="Rakubo"
                    width={200}
                    height={200}
                    className="w-full hover:opacity-60"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float-delayed {
          0% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-13px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
