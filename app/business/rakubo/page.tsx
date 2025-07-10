import Image from 'next/image'

export default function RakuboPage() {
  const rakuboImages = [
    { src: '/images/business_rakubo_01.jpg', alt: 'Rakubo Business Image 1' },
    { src: '/images/business_rakubo_02.jpg', alt: 'Rakubo Business Image 2' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Rakubo</h1> */}
        
        <div className="space-y-8">
          {rakuboImages.map((image, index) => (
            <div key={index} className="relative w-full">
              <div className="xl:shadow-2xl xl:shadow-gray-300/50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}