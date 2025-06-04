import React, { useState } from 'react';
import { dummyBrands } from '../data/brands';
import { Star, Plus, Minus, Search, SlidersHorizontal } from 'lucide-react';
import '../styles/CollaborationStatus.css';

const statusMap = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
  'approved-archived': 'Archived',
  submitted: 'Submitted'
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
    <div className="collab-vertical-board">
      {/* 🔍 Search Bar + Count + Filter */}
      <div className="collab-search-filter">
        <div className="search-left">
          <h3>{filteredBrands.length} Collaborations</h3>
        </div>
        <div className="search-right">
          <div className="search-input">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* 📦 Sections */}
      {Object.entries(statusMap).map(([key, title]) => (
        <div className="collab-section" key={key}>
          <div className="collab-header" onClick={() => toggleSection(key)}>
            <h3>
              {title} ({grouped[key]?.length || 0})
            </h3>
            {openSections[key] ? <Minus size={16} /> : <Plus size={16} />}
          </div>
          {openSections[key] && (
            <div className="collab-list">
              {grouped[key]?.map((brand, idx) => (
                <div className="status-card" key={idx}>
                  <div className="card-header-with-action">
                    <div className="card-header">
                      <img src={brand.logo} alt={brand.name} />
                      <div>
                        <h4>{brand.name}</h4>
                        <div className="rating">
                          <Star size={16} fill="#FEC84B" color="#FEC84B" />
                          <span>{brand.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="action-btn">Action Button</button>
                  </div>

                  <p className="desc">{brand.desc}</p>
                  <div className="tag-list">
                    {brand.tags?.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {brand.requestedDate && (
                    <p className="meta">
                      Requested date: <strong>{brand.requestedDate}</strong>
                    </p>
                  )}
                  {brand.submittedLink && (
                    <p className="meta">
                      URL:{' '}
                      <a
                        href={brand.submittedLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {brand.submittedLink}
                      </a>
                    </p>
                  )}
                  {brand.uploadedWork && (
                    <p className="meta">
                      Uploaded work: <strong>{brand.uploadedWork}</strong>
                    </p>
                  )}
                  {brand.submittedDate && !brand.requestedDate && (
                    <p className="meta">
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
