import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#e53935]">KYB</h3>
            <p className="mb-4 text-gray-300">
              Karang Taruna Krida Yasa Baru adalah organisasi kepemudaan yang berbasis di Wonogiri, Indonesia.
            </p>
            <p className="text-gray-300">Bersatu, Berkarya, Berdaya</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Tentang", href: "#tentang" },
                { name: "Divisi", href: "#divisi" },
                { name: "Kegiatan", href: "#kegiatan" },
                { name: "Keanggotaan", href: "#keanggotaan" },
                { name: "Galeri", href: "#galeri" },
                { name: "Berita", href: "#berita" },
                { name: "Kontak", href: "#kontak" },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-300 hover:text-[#e53935] transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Terhubung Dengan Kami</h3>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-[#e53935] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-[#e53935] transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="mailto:kyb@gmail.com"
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-[#e53935] transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Karang Taruna Krida Yasa Baru. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
