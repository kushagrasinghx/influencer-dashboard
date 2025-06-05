import React, { useState } from 'react';
import { Star, Search, SlidersHorizontal } from 'lucide-react';
import { dummyBrands } from '../data/brands';

const AllBrands = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = dummyBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h3 className="text-base font-semibold text-gray-800">
          {filteredBrands.length} Brands
        </h3>
        <div className="flex gap-3 items-center">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search brand"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="ml-2 bg-transparent outline-none text-sm text-gray-800"
            />
          </div>
          {/* Filter */}
          <button className="bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm cursor-pointer">
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Brand Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filteredBrands.map((brand, index) => (
          <div
            className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3"
            key={index}
          >
            <div className="flex items-center gap-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-base font-semibold text-gray-900">{brand.name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={16} fill="#FEC84B" color="#FEC84B" />
                  <span className="text-sm font-medium text-gray-700">{brand.rating}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{brand.desc}</p>

            <div className="flex gap-2 flex-wrap">
              {brand.tags?.map(tag => (
                <span
                  className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-lg font-medium"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="text-sm">
                Active Campaigns:{' '}
                <strong className="text-pink-800">
                  {brand.campaigns?.toString().padStart(2, '0') || '00'}
                </strong>
              </span>
              <button className="bg-pink-800 text-white px-4 py-2 text-sm rounded-xl hover:bg-pink-100 hover:text-pink-800 transition">
                Collaborate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
