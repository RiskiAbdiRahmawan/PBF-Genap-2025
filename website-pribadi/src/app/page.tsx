import type { Metadata } from "next";
import Image from "next/image";
import profilePic from "../../public/images/fotoProfil.jpg"; // Ganti dengan path gambar Anda

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Lebih lanjut tentang saya dan apa yang saya lakukan",
  openGraph: {
    images: "/public/images/fotoProfil.jpg",
    url: "https://example.com/about",
  },
};

export default function About({metadata}: any) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 bg-gray-100">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Card Content */}
        <div className="p-8 text-center">
          <h1 className="font-bold text-3xl text-zinc-800 mb-4">
            Tentang Saya
          </h1>
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
            <Image
              src={profilePic}
              alt="Foto Profil Riski"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Bio */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-zinc-700">Siapa Saya</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Halo! Saya Riski, seorang pengembang perangkat lunak yang
              bersemangat membangun aplikasi inovatif dan menulis esai tentang
              teknologi serta kehidupan.
            </p>
            <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-zinc-700">Pengembang Full-Stack</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-zinc-700">Penulis Esai Teknologi</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-zinc-700">Pecinta Kopi</span>
              </li>
            </ul>
            <a
              href="mailto:your.email@example.com"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}