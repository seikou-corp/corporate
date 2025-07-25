'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function RakuboPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="">
      <div
        className="text-[#272859] min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #a5e0b4 0%, #fff36c 20%, #f2f1ed 50%)',
        }}
      >
        {/* Header with animation */}
        <div
          className={`relative z-10 pt-40 md:pt-40 pb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Image
              src="/images/business/rakubo/rakubo-01_businesscontent.png"
              alt="Business Content"
              width={800}
              height={250}
              className="mx-auto w-[400px] md:w-[450px] lg:w-[700px] h-auto"
            />

            {/* Main content */}
          </div>
        </div>

        {/* Rakubo About Section */}
        <div className="relative pb-20 md:pb-40 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`text-center transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col gap-2 mb-12">
                <Image
                  src="/images/business/rakubo/rakubo-01_aboutrakubo-illust.png"
                  alt="Rakuboロゴ"
                  width={300}
                  height={120}
                  className="mx-auto w-[150px] md:w-[170px] lg:w-[200px] h-auto"
                />
                <Image
                  src="/images/business/rakubo/rakubo-01_aboutrakubo-logo.png"
                  alt="Rakubotテキストロゴ"
                  width={300}
                  height={120}
                  className="mx-auto w-[200px] md:w-[250px] lg:w-[300px] h-auto"
                />
                <div className="text-2xl md:text-3xl font-normal">とは</div>
              </div>
              <h2 className="text-2xl inline-block bg-white md:text-3xl leading-[2.5rem] font-normal mb-8 pl-12 pr-8 py-4">
                創造性を解き放ち、<br className="block sm:hidden" />ECビジネスを<br className="block sm:hidden" />新たな次元へ。
              </h2>
              <div className="max-w-3xl mx-auto px-4 text-lg md:text-xl leading-[2.5rem] space-y-4">
                Rakuboは、単なる効率化ツールではありません。
                <br className="hidden md:block" />
                デザインセンスの高いテンプレートに加え、豊富なカスタマイズ機能、
                <br className="hidden md:block" />
                そしてAPI解放による無限の自由度を提供します。
                <br />
                これにより、EC運営者の皆様は、自身のアイデアを形にし、
                <br className="hidden md:block" />
                ブランドの世界観を最大限に表現することが可能になります。
              </div>
            </div>

            {/* Product Screenshots */}
            <div
              className={`py-16 transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Image
                src="/images/business/rakubo/rakubo-01_rakuboimage.png"
                alt="Rakubo Screenshots"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="max-w-3xl mx-auto px-4 text-lg md:text-xl leading-[2.5rem] space-y-4">
                私たちは、Rakuboを通じてECビジネスを単なる販売チャネルから
                <br className="hidden md:block" />
                創造的な表現の場へと進化させたいと考えています。
                <br />
                EC運営者の皆様が、創造性を解き放ち
                <br className="hidden md:block" />
                独自のブランドストーリーを紡ぎ出す。
                <br />
                それこそがRakuboが目指す、ECビジネスの新たな次元です。
              </div>
            </div>

            {/* EC Operations Section */}
            <div
              className={`max-w-4xl mx-auto mt-20 bg-white p-8 md:p-20 transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ boxShadow: '20px 20px rgba(0, 0, 0, 0.05)' }}
            >
              <div className="flex flex-wrap items-start space-x-14 space-y-6 mb-6">
                <div className="flex place-content-center items-center bg-[#272859] text-white w-[130px] h-[130px] md:w-[150px] md:h-[150px] px-4 py-2 text-xl gap-1">
                  <div className="tracking-widest">
                    Rakubo
                    <br />
                    開発背景
                  </div>
                </div>
                <h3 className="my-auto text-[1.22rem] md:text-2xl lg:text-3xl h-full font-normal leading-[2.5rem] lg:leading-[3rem] tracking-normal md:tracking-wider">
                  EC運営者の『可能性』を最大化し、
                  <br className="hidden sm:block" />
                  ビジネスの成長を加速する。
                </h3>
              </div>

              <div className="relative rounded-full bg-[#f2f1ed] w-full max-w-3xl mx-auto py-4 px-6 text-center font-semibold">
                「日々の単純作業に追われ、本来注力すべき戦略立案や創造的な仕事に時間を割けない。」
              </div>
              <div className="relative left-1/2 -translate-1/2 rounded-full bg-[#f2f1ed] h-10 w-10 -mt-0.5"></div>
              <div className="relative left-1/2 -translate-1/2 rounded-full bg-[#f2f1ed] h-5 w-5 -mt-1 mb-4"></div>

              <div className="text-sm md:text-base leading-[2.0rem] max-w-xl mx-auto text-justify">
                これは私たち自身が経験した、EC運営の現場におけるリアルな課題でした。
                だからこそ、私たちは「創造性を解き放ち、ECビジネスを新たな次元へ。」という開発理念のもと、EC運営者の皆様が創造的な仕事に集中できる環境を実現したいと考えました。
                <br />
                自社ECサイト運営で培ったノウハウと、大手企業様のシステム開発で培った高いIT技術力。
                <br />
                これらを融合することで、私たちはEC運営者の皆様の「可能性」を最大化し、ビジネスの成長を加速させることができると確信しています。
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/business/rakubo/rakubo-01_vision-bg.png"
            alt="Rakubo Screenshots"
            width={1200}
            height={600}
            className="absolute -bottom-[130px] sm:-bottom-[150px] md:-bottom-[220px] xl:-bottom-[400px] scale-200 md:scale-100 w-full h-auto"
          />
        </div>
        <div className="bg-white h-[300px] md:h-[400px]"></div>
      </div>

      <div className="relative -top-[250px] -mb-[100px] text-[#272859] overflow-hidden">
        {/* Vision Section */}
        <div className="relative py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`text-center transition-all duration-1000 delay-900 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Image
                src="/images/business/rakubo/rakubo-01_vision-logo.png"
                alt="Rakubo Vision"
                width={300}
                height={120}
                className="mx-auto mb-4 w-[100px] md:w-[150px] lg:w-[200px] h-auto"
              />
              <h2 className="font-mplus-rounded text-5xl md:text-8xl font-bold">VISION</h2>
              <h3 className="text-xl md:text-2xl font-bold my-12 tracking-widest leading-[2.5rem]">
                EC運営に関わる全ての人を
                <br />
                創造的な仕事に集中できる世界へ。
              </h3>
              <div className="max-w-2xl px-10 mx-auto font-semibold text-base md:text-lg leading-[2.2rem] space-y-4 text-left">
                私たち株式会社SEIKOUは、ECサイト運営の効率化を追求し、自社サービス「Rakubo」を開発・提供しています。
                <br />
                これは、私たちが経験した「EC運営の煩雑さ」という課題を、IT技術で解決したいという強い想いから生まれたサービスです。
                <br />
                時間や場所に縛られることなく、全てのEC運営者が創造的な仕事に専念できる未来。
                <br />
                それが、私たちが目指す世界です。
                <br />
                「Rakubo」を通じて、EC運営に関わる全ての人を煩雑な作業から解放し、創造的な価値を生み出すことに集中できる環境を実現します。
                <br />
                そして、ミッションの実現を通し、EC業界全体の発展に貢献します。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
