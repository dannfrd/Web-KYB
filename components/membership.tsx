import Link from "next/link"

export default function Membership() {
  return (
    <section id="keanggotaan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#43a047] pb-2 inline-block">KEANGGOTAAN</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Persyaratan</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#e53935] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <p className="text-gray-700">Usia 15 tahun</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#e53935] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <p className="text-gray-700">Penduduk Dusun Kedung Banteng</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#e53935] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <p className="text-gray-700">Berkomitmen untuk aktif dalam hidup bermasyarakat</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#e53935] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <p className="text-gray-700">Bersedia mengabdi ke masyarakat</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Manfaat</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#43a047] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">Akses ke semua program dan kegiatan KYB</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#43a047] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">Kesempatan untuk mengembangkan kepemimpinan dan keterampilan organisasi</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#43a047] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">Jaringan dengan pemuda lain dan pemangku kepentingan masyarakat</p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#43a047] text-white font-medium w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">Bekal untuk masa depan</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Cara Bergabung</h3>
          <div className="inline-block bg-[#f9f9f9] p-8 rounded-lg shadow-md">
            <p className="text-gray-800 font-bold text-xl mb-6">Siap menjadi anggota?</p>
            <Link
              href="#kontak"
              className="bg-[#e53935] text-white font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all inline-block"
            >
              HUBUNGI KAMI
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
