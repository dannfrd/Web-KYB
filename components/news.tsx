import Link from "next/link"
import Image from "next/image"

const newsItems = [
  {
    title: "Hasil Rapat Bulanan",
    date: "28 Mei 2023",
    excerpt: "Rangkuman rapat bulanan produktif kami di mana kami membahas acara mendatang dan inisiatif baru.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Persiapan Hari Kemerdekaan",
    date: "15 Juli 2023",
    excerpt: "Tim kami sedang mempersiapkan perayaan Hari Kemerdekaan mendatang dengan berbagai kegiatan menarik.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Sukses Lokakarya Keterampilan Pemuda",
    date: "10 Juni 2023",
    excerpt:
      "Lokakarya keterampilan terbaru sangat sukses dengan lebih dari 50 peserta belajar keterampilan praktis baru.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function News() {
  return (
    <section id="berita" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#43a047] pb-2 inline-block">BERITA TERBARU</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-gray-100 text-[#e53935] font-medium py-1 px-3 mb-4 inline-block rounded-md text-sm">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="mb-4 text-gray-700">{item.excerpt}</p>
                <Link href="#" className="font-medium text-[#43a047] hover:underline transition-colors">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="bg-[#43a047] text-white font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all inline-block"
          >
            LIHAT SEMUA BERITA
          </Link>
        </div>
      </div>
    </section>
  )
}
