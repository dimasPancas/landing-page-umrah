export interface Package {
  id: string;
  name: string;
  category: 'reguler' | 'vip' | 'ramadhan';
  price: number;
  priceLabel: string;
  image: string;
  features: string[];
  bestseller?: boolean;
  badge: string;
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  package: string;
  rating: number;
  text: string;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  location: string;
}

export const packages: Package[] = [
  {
    id: 'izzah',
    name: 'Paket Izzah',
    category: 'reguler',
    price: 25000000,
    priceLabel: 'Rp25Jt',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80',
    badge: 'Ekonomis',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    features: [
      'Hotel Bintang 3 dekat Masjidil Haram',
      'Tiket Pesawat PP',
      'Visa & Perlengkapan Umrah',
      'Bimbingan Ibadah',
    ],
  },
  {
    id: 'mabrur',
    name: 'Paket Mabrur',
    category: 'reguler',
    price: 35000000,
    priceLabel: 'Rp35Jt',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    badge: 'Premium',
    badgeColor: 'bg-emerald-600 text-white',
    bestseller: true,
    features: [
      'Hotel Bintang 4 View Ka\'bah',
      'Pesawat Bisnis PP',
      'Visa Express + Mutawif Berpengalaman',
      'Asuransi Perjalanan + Perlengkapan',
    ],
  },
  {
    id: 'multazam',
    name: 'Paket Multazam',
    category: 'vip',
    price: 55000000,
    priceLabel: 'Rp55Jt',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
    badge: 'VIP',
    badgeColor: 'bg-amber-100 text-amber-700',
    features: [
      'Hotel Bintang 5 View Haram',
      'Pesawat First Class PP',
      'Private Mutawif + Pendampingan 24 Jam',
      'Umrah + Ziarah & Tour Kota Suci',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisyah S.',
    location: 'Jakarta',
    package: 'Paket Mabrur 2024',
    rating: 5,
    initials: 'AS',
    text: 'Pelayanannya sangat profesional. Semua akomodasi rapi, pembimbingnya sabar dan ilmunya dalam. Barakallah, Al-Qibla.',
  },
  {
    id: '2',
    name: 'Fajar R.',
    location: 'Bandung',
    package: 'Paket Izzah 2024',
    rating: 5,
    initials: 'FR',
    text: 'Alhamdulillah, pertama kali umrah dan memilih Al-Qibla. Semua sesuai janji. Hotel dekat masjid, mutawifnya ramah. Sangat puas!',
  },
  {
    id: '3',
    name: 'H. Nuruddin',
    location: 'Surabaya',
    package: 'Paket Multazam 2025',
    rating: 5,
    initials: 'HN',
    text: 'Paket Multazam benar-benar VIP. Hotel view Ka\'bah, pesawat first class, dan pendampingan 24 jam. Sangat worth it untuk ibadah yang khusyuk.',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Dokumen apa saja yang diperlukan untuk mendaftar umrah?',
    answer: 'Dokumen yang diperlukan: KTP asli, KK, Paspor (minimal berlaku 7 bulan), Foto 4x6 latar putih, Buku nikah (untuk yang sudah menikah), dan Surat keterangan mahram (untuk wanita di bawah 45 tahun).',
  },
  {
    id: '2',
    question: 'Apakah tersedia program cicilan untuk pembayaran paket?',
    answer: 'Ya, kami menyediakan program cicilan hingga 12 bulan tanpa bunga. Syarat mudah dan proses cepat. Hubungi customer service kami untuk informasi lebih lanjut.',
  },
  {
    id: '3',
    question: 'Berapa lama proses pengurusan visa umrah?',
    answer: 'Proses pengurusan visa umrah memakan waktu sekitar 7-14 hari kerja setelah semua dokumen lengkap diterima. Untuk visa express (Paket Mabrur & Multazam) bisa lebih cepat, sekitar 3-7 hari kerja.',
  },
  {
    id: '4',
    question: 'Apakah ada pembatalan atau pengembalian dana?',
    answer: 'Kebijakan pembatalan berlaku sesuai dengan syarat dan ketentuan. Pembatalan lebih dari 60 hari sebelum keberangkatan akan dikenakan biaya administrasi. Pembatalan di bawah 60 hari akan dipotong sesuai biaya yang sudah dikeluarkan. Silakan hubungi kami untuk detail lengkap.',
  },
  {
    id: '5',
    question: 'Kapan jadwal keberangkatan terdekat?',
    answer: 'Kami memiliki jadwal keberangkatan setiap bulan. Untuk jadwal pasti dan ketersediaan seat, silakan hubungi customer service kami via WhatsApp atau telepon. Disarankan mendaftar minimal 2 bulan sebelum keberangkatan.',
  },
];

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'Keberangkatan & Tiba di Madinah',
    location: 'Jakarta → Madinah',
    activities: [
      'Berkumpul di bandara untuk briefing',
      'Penerbangan menuju Madinah',
      'Tiba di Madinah, check-in hotel',
      'Istirahat dan persiapan ibadah',
    ],
  },
  {
    day: 2,
    title: 'Ziarah Madinah',
    location: 'Madinah Al-Munawwarah',
    activities: [
      'Sholat di Masjid Nabawi',
      'Ziarah Raudhah',
      'Ziarah ke makam Rasulullah SAW',
      'Ziarah ke Masjid Quba',
      'Ziarah ke Jabal Uhud',
    ],
  },
  {
    day: 3,
    title: 'Madinah - Makkah',
    location: 'Madinah → Makkah',
    activities: [
      'Check-out dari hotel Madinah',
      'Perjalanan darat menuju Makkah',
      'Tiba di Makkah, check-in hotel',
      'Persiapan ihram untuk umrah',
    ],
  },
  {
    day: 4,
    title: 'Umrah Pertama',
    location: 'Makkah Al-Mukarramah',
    activities: [
      'Pelaksanaan umrah (Thawaf, Sa\'i, Tahallul)',
      'Bimbingan manasik dari mutawif',
      'Sholat di Masjidil Haram',
      'Istirahat di hotel',
    ],
  },
  {
    day: 5-8,
    title: 'Ibadah di Makkah',
    location: 'Makkah Al-Mukarramah',
    activities: [
      'Sholat berjamaah di Masjidil Haram',
      'Thawaf sunnah',
      'Umrah kedua (optional)',
      'Ziarah ke tempat bersejarah: Jabal Rahmah, Jabal Tsur, Jabal Nur',
      'Shopping oleh-oleh di Makkah',
    ],
  },
  {
    day: 9,
    title: 'Persiapan Kepulangan',
    location: 'Makkah → Jakarta',
    activities: [
      'Ibadah terakhir di Masjidil Haram',
      'Check-out hotel',
      'Perjalanan ke bandara Jeddah',
      'Penerbangan kembali ke Jakarta',
    ],
  },
];
