import { Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f9f9f9] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#e53935] pb-3 inline-block border-b-2 border-[#e53935]">HUBUNGI KAMI</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Silakan menghubungi kami melalui kontak di bawah ini untuk informasi lebih lanjut tentang Karang Taruna Krida Yasa Baru.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Kontak Kami</h3>

            <div className="space-y-8">
              <div className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                <div className="bg-[#e53935] text-white p-3 mr-5 rounded-full shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Telepon</h4>
                  <p className="text-gray-700 hover:text-[#e53935] transition-colors duration-200">083811473211</p>
                </div>
              </div>

              <div className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                <div className="bg-[#e53935] text-white p-3 mr-5 rounded-full shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                  <a href="mailto:kyb@gmail.com" className="text-gray-700 hover:text-[#e53935] transition-colors duration-200">kyb@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                <div className="bg-[#e53935] text-white p-3 mr-5 rounded-full shadow-md">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Instagram</h4>
                  <a href="https://instagram.com/karangtarunakyb" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#e53935] transition-colors duration-200">@karangtarunakyb</a>
                </div>
              </div>

              <div className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                <div className="bg-[#e53935] text-white p-3 mr-5 rounded-full shadow-md">
                  <Youtube size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">YouTube</h4>
                  <a href="https://youtube.com/c/KarangTarunaKYB" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#e53935] transition-colors duration-200">Karang Taruna KYB</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600">Kami senang bisa berinteraksi dengan Anda</p>
              <p className="text-gray-500 text-sm mt-2">Lokasi: Dusun Kedung Banteng, Sendangijo, Selogiri, Wonogiri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
