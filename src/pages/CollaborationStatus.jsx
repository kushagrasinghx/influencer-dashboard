import React, { useState } from 'react';
import { dummyBrands } from '../data/brands';
import { Star, Plus, Minus, Search, SlidersHorizontal } from 'lucide-react';

const statusMap = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
  'approved-archived': 'Archived',
  submitted: 'Submitted',
};

const CollaborationStatus = () => {
  const [openSections, setOpenSections] = useState(
    Object.keys(statusMap).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = dummyBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const grouped = filteredBrands.reduce((acc, brand) => {
    const key = brand.status;
    if (!acc[key]) acc[key] = [];
    acc[key].push(brand);
    return acc;
  }, {});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col pb-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
        <h3 className="font-semibold text-gray-800 m-0">
          {filteredBrands.length} Collaborations
        </h3>
        <div className="flex gap-3 items-center">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 bg-transparent outline-none text-sm text-gray-800"
            />
          </div>
          <button className="bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm cursor-pointer">
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Sections */}
      {Object.entries(statusMap).map(([key, title]) => (
        <div className="bg-gray-100 rounded-lg shadow-sm mb-7 p-4" key={key}>
          <div
            className="flex justify-between items-center cursor-pointer mb-4 select-none"
            onClick={() => toggleSection(key)}
          >
            <h3 className="text-base font-semibold text-gray-800 m-0">
              {title} ({grouped[key]?.length || 0})
            </h3>
            {openSections[key] ? <Minus size={16} /> : <Plus size={16} />}
          </div>
          {openSections[key] && (
            <div className="flex flex-col gap-4">
              {grouped[key]?.map((brand, idx) => (
                <div
                  className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3"
                  key={idx}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 m-0">
                          {brand.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-1 text-sm text-gray-700">
                          <Star size={16} fill="#FEC84B" color="#FEC84B" />
                          <span className="font-medium ml-1">{brand.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-pink-800 text-white px-4 py-2 text-sm rounded-xl hover:bg-pink-100 hover:text-pink-800 transition">
                      Action Button
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{brand.desc}</p>

                  <div className="flex gap-2 flex-wrap">
                    {brand.tags?.map((tag) => (
                      <span
                        className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-lg font-medium"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {brand.requestedDate && (
                    <p className="text-xs text-gray-700">
                      Requested date: <strong>{brand.requestedDate}</strong>
                    </p>
                  )}
                  {brand.submittedLink && (
                    <p className="text-xs text-gray-700 break-words">
                      URL:{' '}
                      <a
                        href={brand.submittedLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 underline"
                      >
                        {brand.submittedLink}
                      </a>
                    </p>
                  )}
                  {brand.uploadedWork && (
                    <p className="text-xs text-gray-700">
                      Uploaded work: <strong>{brand.uploadedWork}</strong>
                    </p>
                  )}
                  {brand.submittedDate && !brand.requestedDate && (
                    <p className="text-xs text-gray-700">
                      Submitted date: <strong>{brand.submittedDate}</strong>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollaborationStatus;
