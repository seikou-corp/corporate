'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CompanyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="pb-50">
      <div
        className="text-[#272859] min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #a5e0b4 0%, #fff36c 40%, #f2f1ed 100%)',
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

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
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
                <div className="absolute -top-8 md:top-12 right-0 md:right-auto left-auto md:left-[50%] -ml-[95px]">
                  <Image
                    src="/images/company/company-label-from-r.png"
                    alt="Name Label"
                    width={500}
                    height={100}
                    className="h-[60px] w-auto"
                  />
                  <div className="relative -mt-[45px] mr-[100px] md:mr-none text-right md:text-left ml-none md:ml-[135px] mb-4">
                    <p className="text-white text-lg font-thin">代表取締役　尾崎 木実</p>
                  </div>
                </div>
              </div>

              {/* Right side - President description */}
              <div className="bg-white/30 md:bg-none backdrop-blur-lg leading-relaxed relative mt-[0px] md:mt-[150px] p-12 md:p-0 md:w-[80%] xl:w-[60%]">
                <p className="text-xl mb-3 font-medium">効率化が生み出す、未来への成長。</p>
                <p className="text-xl mb-8 font-medium">お客様と共に輝き続けるブランドへ。</p>
                <p className="text-sm leading-[1.8rem] text-justify pb-[100px]">
                  ジュエリーミュージアムでは、ママさんスタッフを中心に、明るく和気あいあいとした職場環境を大切にしています。お客様に楽しんでいただける製品を作ることを常に意識し、チーム一丸となって日々努力を重ねています。その結果、私たちのネックレスチェーンは、楽天年間ランキングで5年連続1位を獲得するという実績を誇ります。私たちの会社はアルバイトを含めて13名の小さなチームですが、Rakuboの導入により業務の効率化を実現し、更なる成長を目指しています。今後もお客様に愛されるブランドとして、共に成長し続けたいと考えています。
                  {/* Name at bottom */}
                  <span className="block mt-10 text-right">
                    <span className="text-4xl font-thin">Konomi Ozaki</span>
                  </span>
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

            <div className="block md:hidden">
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
              <div className="absolute -top-8 md:top-12 left-[0]">
                <Image
                  src="/images/company/company-label-from-l.png"
                  alt="Name Label"
                  width={500}
                  height={100}
                  className="h-[60px] w-auto"
                />
                <div className="relative -mt-[45px] ml-[35px] mb-4">
                  <p className="text-white text-lg font-thin">副社長／技術責任者　尾崎 成光</p>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left side - President description */}
              <div className="bg-white/30 md:bg-none backdrop-blur-lg leading-relaxed relative mt-[0px] md:mt-[400px] p-12 md:p-0 md:left-[40%]">
                {/* <div className="left-[40%] leading-relaxed relative mt-[400px]"> */}
                <p className="text-xl mb-3 font-medium">痛感したEC運営の煩雑さ。</p>
                <p className="text-xl mb-8 font-medium">現場のリアルな課題を解決したい。</p>
                <p className="text-sm leading-[1.8rem] text-justify">
                  プログラマー/Rakubo開発者。ロードアイランド・スクール・オブ・デザイン（RISD）でアニメーションを専攻。卒業後、株式会社SEIKOUでWEB制作とジュエリーミュージアム立ち上げに従事。アイ・エム・ジェイでのディレクション経験を経て、アニメーションへの情熱から一度退職し、CGアニメーション業界へ。東映アニメーションでは「THE FIRST SLAM DUNK」等でキャラクターモデラー兼テクニカルディレクターとして活躍。アートとプログラミングの両面から制作に貢献しました。2023年にSEIKOUに復帰後も、東映アニメーション向けのCG制作効率化システムを開発。現在は自社EC運営の経験から生まれた「Rakubo」を通じて、EC事業者の業務効率化を支援しています。
                  {/* Name at bottom */}
                  <span className="block mt-10 text-right">
                    <span className="text-4xl font-thin">Narimitsu Ozaki</span>
                  </span>
                </p>
              </div>

              {/* Right side - Vice President photo */}
              <div className="lg:w-full">
                <div className="hidden md:block relative">
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
                <div className="hidden md:block absolute top-[200px] lg:top-[290px] right-[50%] -mr-[40px]">
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
          <div className="absolute top-[220px] bg-white left-0 w-9/10 md:w-3/5 h-[50px] text-center z-50"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
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
              <p className="mr-[10%] md:mr-none text-sm leading-[1.8rem] text-justify mt-[350px]">
                都心へのアクセスも良好ながら、豊かな自然が身近に感じられる街、練馬区大泉学園。実は、日本のアニメ発祥の地としても知られています。
              </p>
            </div>

            {/* Right side - Location street photo */}
            <div className="md:w-full">
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

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-[80px]">
            {/* Right side - Vice President photo */}
            <div className="flex-1 mt-[80px] md:mt-0">
              <Image
                src="/images/company/company-train-map.png"
                alt="President"
                width={1315}
                height={710}
                className="mx-auto w-[90%] md:w-full h-auto object-cover"
              />
            </div>

            {/* Left side - President description */}
            <div className="w-[90%] md:w-[28%] relative mx-auto md:pr-[7%] md:mt-[80px] font-semibold">
              <p className="text-sm leading-[1.8rem] text-justify">
                駅周辺には多彩な飲食店があり、都心へも直通アクセス可能。少し歩けば緑豊かな公園も。利便性と文化、自然が調和した暮らしやすい街です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ACCESS Section */}
      <div className="bg-[#f2f1ed] pb-12 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 lg:p-12 text-[#272859]">
            <h2 className="text-6xl font-extralight tracking-wider">ACCESS</h2>
            <p className="text-sm mb-6 text-right">
              〒178-0061 東京都練馬区大泉学園町6-19-40 サンキビル2F
            </p>

            {/* Google Maps iframe */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23071.87313736364!2d139.58987412511433!3d35.77136249976807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e939009e7c83%3A0x8508016d4506ed8b!2z44CSMTc4LTAwNjEg5p2x5Lqs6YO957e06aas5Yy65aSn5rOJ5a2m5ZyS55S677yW5LiB55uu77yR77yZ4oiS77yU77yQIOOCteODs-OCreODk-ODqw!5e0!3m2!1sja!2sjp!4v1753384181174!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORY Section */}
      <div id="history" className="bg-white py-12 md:py-24">
        {/* History Title */}
        <div className="relative mb-8 md:mb-16 gap-0 flex- flex-col">
          <div className="flex flex-col md:flex-row items-end max-w-6xl mx-auto">
            <h2 className="ml-10 md:ml-0 font-mplus-rounded relative -bottom-[1.7rem] md:-bottom-[2rem] text-[#272859] text-[5rem] md:text-[6rem] font-thin">
              HISTORY
            </h2>
            <div className="block md:hidden top-0 -left-[0] w-9/10 z-10 border border-[#272859]"></div>
            <span className="text-xl font-semibold tracking-[0.5rem] pl-[70px] pb-[15px]">
              会社沿革
            </span>
          </div>
          <div className="hidden md:block top-0 -left-[0] w-6/10 z-10 border border-[#272859]"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* 創業期・設立 */}
            <div>
              <span className="bg-[#3a3a6b] text-white font-medium px-6 py-2 inline-block">
                創業期・設立
              </span>
              <table className="min-w-full w-full text-[#272859]">
                <tbody>
                  <tr className="bg-[#f8f4f1]">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2000 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      SEIKOU 貿易 Corporation 創業
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center"></td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      自動車部品を日本向けに輸出開始
                      <br />
                      繊維製品（マイクロファイバー）を品目に加え日本向けに輸出開始
                      (納品先：ソニープラザ・東急ハンズ)
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1]">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2003 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      家庭用雑貨を品目に加え日本向けに輸出開始
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 事業拡大期 */}
            <div>
              <span className="bg-[#3a3a6b] text-white font-medium px-6 py-1 inline-block">
                事業拡大期
              </span>
              <table className="min-w-full w-full text-[#272859]">
                <tbody>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2011 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      株式会社 SEIKOU 貿易を株式会社 SEIKOU に社名変更
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center"></td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      WEBデザイン業務を開始、実績：太平洋エンジニアリング株式会社、アサノコンクリート等
                      <br />
                      楽天市場へ出店 子供服ジャンル店舗名 AppleBee
                      <br />
                      QVCジャパン向け化粧品・BBクリームを開発
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2012 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      女優田中美奈子起用、化粧品・BBクリームをQVCジャパンにて販売
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2013 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      Amazon　Yahoo!　Qoo10に出店
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2014 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      楽天市場・ジュエリージャンルに変更　店舗名：ジュエリーミュージアム
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2023 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">Shopify 出店</td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2024 年
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      東映アニメーション株式会社のテクニカルディレクション業務を開始
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center"></td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      実績：アーティスト向けサポートツールの開発、社内自動化システムの開発
                      <br />
                      ジュエリーミュージアムの自動化システム開発を開始
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-1 text-sm font-medium min-w-[150px] text-center">
                      2025 年 8 月 1 日
                    </td>
                    <td className="px-6 py-1 text-sm w-full leading-[1.8rem]">
                      ECサイト運営効率化サービス「Rakubo」をローンチ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* COMPANY INFO Section */}
      <div id="profile" className="bg-white pb-12 md:pb-24">
        {/* 会社概要 */}
        <div className="relative mb-8 md:mb-16 gap-0 flex- flex-col">
          <div className="flex flex-col md:flex-row items-end max-w-6xl mx-auto">
            <h2 className="ml-10 md:ml-0 font-mplus-rounded relative -bottom-[1.7rem] md:-bottom-[2rem] text-[#272859] text-[5rem] md:text-[6rem] font-thin">
              COMPANY
            </h2>
            <div className="block md:hidden top-0 -left-[0] w-9/10 z-10 border border-[#272859]"></div>
            <span className="text-xl font-semibold tracking-[0.5rem] pl-[70px] pb-[15px]">
              会社概要
            </span>
          </div>
          <div className="hidden md:block top-0 -left-[0] w-6/10 z-10 border border-[#272859]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* 会社概要 */}
            <div>
              <table className="min-w-full w-full text-[#272859]">
                <tbody>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      社　名
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">株式会社 SEIKOU</td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      所 在 地
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      〒178-0061 東京都練馬区大泉学園町 7-21-15
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      設　立
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      2006 年 7 月 25 日
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      連 絡 先
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      TEL 050-1725-1113　　EMAIL info@seikou-corp.com
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      代 表 者
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      代表取締役　尾崎木実
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      従業員数
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      13 人（2025 年 7 月現在）
                    </td>
                  </tr>
                  <tr className="bg-[#f8f4f1] ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      資 本 金
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">1,000 万円</td>
                  </tr>
                  <tr className=" ">
                    <td className="px-6 py-2 text-sm font-medium min-w-[150px] text-center">
                      事業内容
                    </td>
                    <td className="px-6 py-2 text-sm w-full leading-[1.8rem]">
                      • ネットショップ運営「ジュエリーミュージアム」
                      <br />
                      • ジュエリー・アクセサリー製造販売
                      <br />
                      • CGアニメーション / VFX における技術支援・システム開発
                      <br />
                      • EC支援サービス事業「Rakubo」
                      <br />• Webブランディング、制作、デザイン
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Recruit Banner */}
      <div className="relative">
        <Image
          src="/images/company/company-recruit-banner.jpg"
          alt="一緒に働いてくれる仲間を募集しています。"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
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

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
