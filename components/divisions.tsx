import { Users, Dumbbell, Camera, Zap, Heart } from "lucide-react"

const divisions = [
  {
    name: "Humas",
    description: "Mengelola hubungan masyarakat dan komunikasi eksternal dengan komunitas dan pemangku kepentingan.",
    icon: Users,
    color: "#e53935",
  },
  {
    name: "Olahraga",
    description: "Menyelenggarakan kegiatan dan acara olahraga untuk mempromosikan kesehatan fisik di kalangan pemuda.",
    icon: Dumbbell,
    color: "#43a047",
  },
  {
    name: "Media",
    description: "Menangani dokumentasi, media sosial, dan pembuatan konten untuk organisasi.",
    icon: Camera,
    color: "#e53935",
  },
  {
    name: "Listrik",
    description: "Mengelola aspek teknis termasuk listrik, sistem suara, dan peralatan teknis untuk acara.",
    icon: Zap,
    color: "#43a047",
  },
  {
    name: "Rohani",
    description: "Berfokus pada pengembangan spiritual dan kegiatan keagamaan untuk komunitas.",
    icon: Heart,
    color: "#e53935",
  },
]

export default function Divisions() {
  return (
    <section id="divisi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#43a047] pb-2 inline-block">DIVISI KAMI</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div key={division.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: division.color }}
              >
                <division.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{division.name}</h3>
              <p className="text-gray-700">{division.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
