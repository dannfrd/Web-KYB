const activities = [
  {
    name: "Rapat Bulanan",
    date: "Setiap akhir bulan",
    description: "Pertemuan bulanan untuk membahas kemajuan organisasi dan merencanakan kegiatan mendatang.",
  },
  {
    name: "17 Agustus",
    date: "Agustus",
    description: "Perayaan Hari Kemerdekaan dengan berbagai lomba dan acara masyarakat.",
  },
  {
    name: "Tirakatan",
    date: "16 Agustus",
    description: "Malam tirakatan sebelum Hari Kemerdekaan dengan pertunjukan budaya dan kumpul bersama masyarakat.",
  },
  {
    name: "Bakti Sosial",
    date: "Setiap triwulan",
    description: "Kegiatan pelayanan sosial termasuk bersih-bersih lingkungan dan membantu yang membutuhkan.",
  },
  {
    name: "Pelatihan Keterampilan",
    date: "Dua bulan sekali",
    description: "Lokakarya pelatihan keterampilan bagi pemuda untuk mengembangkan kemampuan praktis.",
  },
  {
    name: "Turnamen Olahraga",
    date: "Dua kali setahun",
    description: "Turnamen olahraga untuk mempromosikan kompetisi sehat dan kebugaran fisik.",
  },
]

export default function Activities() {
  return (
    <section id="kegiatan" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e53935] pb-2 inline-block">KEGIATAN</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={activity.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-100 text-[#e53935] font-medium py-1 px-3 mb-4 inline-block rounded-md">
                {activity.date}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{activity.name}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
