import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Daftar artikel dan esai yang telah saya tulis",
  openGraph: {
    title: "Esai",
    description: "Daftar artikel dan esai yang telah saya tulis",
  },
};

type EssayItemProps = {
  title: string;
  excerpt: string;
  url: string;
};

function EssayItem({ title, excerpt, url }: EssayItemProps) {
  return (
    <li className="border border-zinc-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <a href={url} className="block p-6">
        <h3 className="text-xl font-semibold text-zinc-800 mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 line-clamp-3">{excerpt}</p>
        <span className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline">
          Baca Selengkapnya
        </span>
      </a>
    </li>
  );
}

export default function Essays() {
  return (
    <div className="mt-16 px-8 mb-16">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai Saya</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa artikel dan esai yang telah saya tulis.
        </p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl text-zinc-700">Daftar Tulisan</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
          <EssayItem
            title="Judul Esai 1"
            excerpt="Ini adalah ringkasan singkat dari esai pertama saya yang membahas topik tertentu dengan panjang tertentu agar terlihat realistis."
            url="https://example.com"
          />
          <EssayItem
            title="Judul Esai 2"
            excerpt="Cuplikan dari esai kedua yang membahas sesuatu yang menarik dan informatif dalam beberapa kalimat."
            url="https://example.com"
          />
          <EssayItem
            title="Judul Esai 3"
            excerpt="Deskripsi singkat esai ketiga yang memberikan wawasan unik tentang suatu masalah."
            url="https://example.com"
          />
        </ul>
      </div>
    </div>
  );
}
