export default function About() {
  return (
    <section id="tentang" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e53935] pb-2 inline-block">TENTANG KAMI</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Sejarah Kami</h3>
            <p className="mb-4 text-gray-700">
              Didirikan pada tahun 2000, Karang Taruna Krida Yasa Baru (KYB) adalah organisasi kepemudaan yang berbasis
              di Wonogiri, Indonesia. Kami memberdayakan pemuda untuk mengembangkan potensi mereka dan berkontribusi
              pada pembangunan masyarakat.
            </p>
            <p className="text-gray-700">
              Selama bertahun-tahun, kami telah tumbuh menjadi komunitas pemuda yang bersemangat dan berdedikasi untuk
              memberikan dampak positif bagi masyarakat melalui berbagai program dan kegiatan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Visi & Misi</h3>
            <div className="mb-6">
              <h4 className="font-bold text-xl mb-2 text-gray-800">Visi</h4>
              <p className="text-gray-700">
                Menciptakan generasi muda yang kreatif, inovatif, dan berkontribusi positif bagi masyarakat.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-gray-800">Misi</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mengembangkan potensi pemuda melalui berbagai program</li>
                <li>Membangun semangat tanggung jawab sosial</li>
                <li>Menciptakan wadah bagi pemuda untuk mengekspresikan kreativitas</li>
                <li>Menjalin kerjasama antara pemuda dan pemangku kepentingan masyarakat lainnya</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Kepemimpinan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#e53935] rounded-full mb-4 flex items-center justify-center">
          <span className="font-bold text-white text-3xl">M</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Bagas</h4>
              <p className="text-center text-gray-600">Ketua Umum</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#fbc02d] rounded-full mb-4 flex items-center justify-center">
          <span className="font-bold text-white text-3xl">M</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Mahardika</h4>
              <p className="text-center text-gray-600">Ketua 1</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#43a047] rounded-full mb-4 flex items-center justify-center">
          <span className="font-bold text-white text-3xl">I</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Tri Pamungkas</h4>
              <p className="text-center text-gray-600">Ketua 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
