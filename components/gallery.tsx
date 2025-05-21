import Image from "next/image"

const galleryImages = [
  { src: "/assets/kajian-akbar.jpg", alt: "Pengajian Akbar" },
  { src: "/assets/tarling.jpg", alt: "Takbir Keliling Idul Fitri" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Lokakarya pelatihan pemuda" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Turnamen olahraga" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Pertunjukan budaya" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Kegiatan bakti sosial" },
]

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e53935] pb-2 inline-block">GALERI</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
              <p className="mt-4 font-medium text-center text-gray-800">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
