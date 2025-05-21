import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#c7232c] to-[#e54a4a] min-h-[100vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4 relative py-20 md:py-0">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-3 mb-8 rounded-full shadow-lg w-36 h-36 flex items-center justify-center">
            <Image
              src="/assets/KYB.png"
              alt="Logo Karang Taruna Krida Yasa Baru"
              width={120}
              height={120}
              className="object-cover w-[90%] h-[90%]"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            KARANG TARUNA
            <br />
            KRIDA YASA BARU
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-8 tracking-wide">Bersatu, Berkarya, Berdaya</p>
          <Link
            href="#membership"
            className="bg-white text-[#e53935] font-medium text-lg px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            BERGABUNG BERSAMA KAMI
          </Link>
        </div>
      </div>
    </section>
  )
}
