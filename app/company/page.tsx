'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CompanyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div>
      <div
        className="text-[#272859] min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #a5e0b4 0%, #fff36c 40%, #f2f1ed 100%)',
        }}
      >
        {/* Header with animation */}
        <div
          className={`relative z-10 pt-20 md:pt-28 pb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Image
              src="/images/company/company-member-title.png"
              alt="COMPANY MEMBER"
              width={600}
              height={150}
              className="mx-auto w-[300px] md:w-[370px] lg:w-[450px] h-auto"
            />
          </div>
        </div>

        {/* Member sections */}
        <div className="relative pt-8 pb-20">
          {/* President section */}
          <div className="mb-24 relative z-10">
            {/* Right white background */}
            <div
              className={`absolute top-[100px] right-0 bg-white w-2/3 h-full z-0 transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute -bottom-[10px] left-[0px] -translate-x-[70%]">
                <Image
                  src="/images/company/company-circle-stripes.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
              {/* Left side - President photo */}
              <div className="lg:w-full">
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/company/company-president-profile-pic-square.jpg"
                      alt="President"
                      width={634}
                      height={727}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Name label */}
                <div className="absolute top-8 lg:top-12 left-[50%] -ml-[95px]">
                  <Image
                    src="/images/company/company-label-from-r.png"
                    alt="Name Label"
                    width={500}
                    height={100}
                    className="h-[60px] w-auto"
                  />
                  <div className="relative -mt-[45px] ml-[135px] mb-4">
                    <p className="text-white text-lg font-thin">代表取締役　尾崎 木実</p>
                  </div>
                </div>
              </div>

              {/* Right side - President description */}
              <div className="leading-relaxed relative mt-[150px] w-[60%]">
                <p className="text-xl mb-3 font-medium">効率化が生み出す、未来への成長。</p>
                <p className="text-xl mb-8 font-medium">お客様と共に歩むプラットフォームへ。</p>
                <p className="text-sm leading-[1.8rem] text-justify pb-[100px]">
                  ジュエリーミュージアムやアクセサリー、ファッション系商
                  品を専門的に、物流と倉庫サービスも充実させてお
                  り、エラーが発生したらすぐに見つけることができました。
                  しかも時短業務を今までできていたので、顧客へのメー
                  ルールをより可能となり楽をできています。また、
                  弊社開発、私たちの会社主張が顧客、東京都 練馬区株式会社
                  アンとして前提とした開発資産で メリットをつけています。それが私たちユニークな強
                  みであるサポート|はあるプロフェッショナルで楽天市
                  場を作成し、顧客までらの事業優先を開発を生
                  み出します。前身を倉庫を行っていけばより、中国か ら商品に導入したような
                  バリエーションと、限り遅延と 確保をより上げていく。
                  {/* Name at bottom */}
                  <div className="mt-10 text-right">
                    <p className="text-4xl font-thin">Konomi Ozaki</p>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Vice President section */}
          <div className="-mt-[70px] mb-24 relative z-10">
            {/* Left white background */}
            <div
              className={`absolute top-[200px] left-0 bg-white w-3/4 h-[90%] z-0 transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute -bottom-[50px] right-[40px] translate-x-[70%]">
                <Image
                  src="/images/company/company-circle-stripes.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
              {/* Left side - President description */}
              <div className="left-[40%] leading-relaxed relative mt-[400px]">
                <p className="text-xl mb-3 font-medium">痛感したEC運営の煩雑さ。</p>
                <p className="text-xl mb-8 font-medium">現場のリアルな課題を解決したい。</p>
                <p className="text-sm leading-[1.8rem] text-justify">
                  プログラマーであり、Rakuboの開発者。大学時代はアニメーションを専攻し、卒業後は株式会社SEIKOUに入社してWEB制作やジュエリーミュージアムの立ち上げを担当。その後、アニメーションの夢を諦めきれず、同社を退職し、WEB制作会社やアニメーション業界でのキャリアを積みました。2023年には再び株式会社SEIKOUに戻り、東映アニメーションでITプロデューサーとしてアニメーション制作プログラムの開発と効率化に貢献。ジュエリーミュージアム運営のために開発したRakuboは、業務の効率化を実現し、皆様に役立つサービスとして提供しています。
                  {/* Name at bottom */}
                  <div className="mt-10 text-right">
                    <p className="text-4xl font-thin">Narimitsu Ozaki</p>
                  </div>
                </p>
              </div>

              {/* Right side - Vice President photo */}
              <div className="lg:w-full">
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/company/company-vice-president-profile-pic-square.jpg"
                      alt="President"
                      width={634}
                      height={727}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Name label */}
                <div className="absolute top-[200px] lg:top-[290px] right-[50%] -mr-[40px]">
                  <Image
                    src="/images/company/company-label-from-l.png"
                    alt="Name Label"
                    width={500}
                    height={100}
                    className="h-[60px] w-auto"
                  />
                  <div className="relative -mt-[45px] ml-[45px] mb-4">
                    <p className="text-white text-lg font-thin">副社長／技術責任者　尾崎 成光</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#272859] relative overflow-hidden bg-[#f2f1ed]">
        {/* Location section */}
        <div className="mb-24 relative z-10">
          {/* Left white background */}
          <div className="absolute top-[220px] bg-white left-0 w-3/5 h-[50px] text-center z-50"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
            <div className="left-[30%] w-[70%] leading-relaxed relative">
              <div className="absolute top-[50px] left-[40px] translate-x-[00%]">
                <Image
                  src="/images/company/company-circle-stripes.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>

              <div className="absolute top-[160px] w-full text-center z-50">
                <p className="text-3xl mb-8 font-medium">働く環境</p>
                <p className="text-2xl mb-8 font-medium">東京都練馬区大泉学園</p>
                <p className="text-xl mb-8 font-medium">は、こんなところ</p>
              </div>
              <p className="text-sm leading-[1.8rem] text-justify mt-[350px]">
                都心へのアクセスも良好ながら、豊かな自然が身近に感じられる街、練馬区大泉学園。実は、日本のアニメ発祥の地としても知られています。
              </p>
            </div>

            {/* Right side - Location street photo */}
            <div className="lg:w-full">
              <div className="relative">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/company/company-location-photo.jpg"
                    alt="President"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto flex gap-20">
            {/* Right side - Vice President photo */}
            <div className="flex-1">
              <Image
                src="/images/company/company-train-map.png"
                alt="President"
                width={1315}
                height={710}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Left side - President description */}
            <div className="w-[28%] relative pr-[7%] mt-[80px] font-semibold">
              <p className="text-sm leading-[1.8rem] text-justify">
                駅周辺には多彩な飲食店があり、都心へも直通アクセス可能。少し歩けば緑豊かな公園も。利便性と文化、自然が調和した暮らしやすい街です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections here */}

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

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
