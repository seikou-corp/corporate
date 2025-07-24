import Image from 'next/image'

export default function CompanyPage() {
  const companyImages = [
    { src: '/images/company_01.jpg', alt: 'Company Image 1', id: 'member' },
    { src: '/images/company_02.jpg', alt: 'Company Image 2', id: 'about-oizumi'},
    // { src: '/images/company_03.jpg', alt: 'Company Image 3', id: 'location' },
    { src: '/images/company_04.jpg', alt: 'Company Image 4', id: 'history' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {companyImages.map((image, index) => (
            <div key={index} id={image.id} className="relative w-full">
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