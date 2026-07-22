import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { packages, type Package } from '../data/packages';

type CategoryFilter = 'all' | 'reguler' | 'vip' | 'ramadhan';

export default function PackageSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredPackages = packages.filter(
    (pkg) => activeFilter === 'all' || pkg.category === activeFilter
  );

  const filters = [
    { id: 'all' as const, label: 'Semua Paket' },
    { id: 'reguler' as const, label: 'Reguler' },
    { id: 'vip' as const, label: 'VIP' },
    { id: 'ramadhan' as const, label: 'Ramadhan' },
  ];

  return (
    <section id="paket" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
            Pilihan Paket
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Paket Umrah <span className="text-emerald-600">Terbaik</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Kami menawarkan berbagai paket umrah yang bisa disesuaikan dengan kebutuhan dan budget Anda.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <motion.div
          layout
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                pkg.bestseller ? 'border-2 border-emerald-400' : 'border border-gray-100'
              } relative`}
            >
              {/* Best Seller Badge */}
              {pkg.bestseller && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                  ⭐ Best Seller
                </div>
              )}

              {/* Package Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              ></div>

              {/* Package Content */}
              <div className="p-6">
                {/* Badge and Price */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  <span className="text-2xl font-extrabold text-emerald-600">
                    {pkg.priceLabel}
                  </span>
                </div>

                {/* Package Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>

                {/* Features List */}
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6281234567890?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20${pkg.name}%20(${pkg.priceLabel})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-3 rounded-xl transition border ${
                    pkg.bestseller
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 border-emerald-600'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                  }`}
                >
                  📲 Ambil Paket Ini
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
