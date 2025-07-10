import Image from 'next/image'

export default function Page() {
  const topImages = [
    { src: '/images/top_01.jpg', alt: 'Top Image 1' },
    { src: '/images/top_02.jpg', alt: 'Top Image 2' },
    { src: '/images/top_03.jpg', alt: 'Top Image 3' },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-[1500px] mx-auto">
        <div className="space-y-0">
          {topImages.map((image, index) => (
            <div key={index} className="relative w-full">
              <div className="xl:shadow-2xl xl:shadow-gray-300/50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  style={{ objectFit: 'cover' }}
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