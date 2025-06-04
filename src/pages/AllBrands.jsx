import React, { useState } from 'react';
import '../styles/AllBrands.css';
import { Star, Search, SlidersHorizontal } from 'lucide-react';
import { dummyBrands } from '../data/brands';

const AllBrands = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = dummyBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="brands-page">
      <div className="brands-header">
        <h3>{filteredBrands.length} Brands</h3>
        <div className="search-filter">
          <div className="search-input">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search brand"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="brands-grid">
        {filteredBrands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <div className="brand-header">
              <img src={brand.logo} alt={brand.name} />
              <div>
                <h4>{brand.name}</h4>
                <div className="rating">
                  <Star size={16} color="#FEC84B" fill="#FEC84B" />
                  <span>{brand.rating}</span>
                </div>
              </div>
            </div>

            <p className="desc">{brand.desc}</p>

            <div className="tag-list">
              {brand.tags?.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>

            <div className="card-footer">
              <span className="campaigns">
                Active Campaigns: <strong>{brand.campaigns?.toString().padStart(2, '0') || '00'}</strong>
              </span>
              <button className="collab-btn">Collaborate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
