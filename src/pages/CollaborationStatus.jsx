import React from 'react';
import './CollaborationStatus.css';
import { dummyBrands } from '../data/brands';
import { Star } from 'lucide-react';

const statusMap = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
  'approved-archived': 'Archived',
  submitted: 'Submitted'
};

const grouped = dummyBrands.reduce((acc, brand) => {
  const key = brand.status;
  if (!acc[key]) acc[key] = [];
  acc[key].push(brand);
  return acc;
}, {});

const CollaborationStatus = () => {
  return (
    <div className="collab-board">
      {Object.entries(statusMap).map(([key, title]) => (
        <div className={`column ${key}`} key={key}>
          <div className="column-header">
            <h4>{title} ({grouped[key]?.length || 0})</h4>
          </div>
          {grouped[key]?.map((brand, idx) => (
            <div className="status-card" key={idx}>
              <div className="card-header">
                <img src={brand.logo} alt={brand.name} />
                <div>
                  <h5>{brand.name}</h5>
                  <div className="rating">
                    <Star size={16} fill="#FEC84B" color="#FEC84B" />
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
              {brand.requestedDate && (
                <p className="meta">Requested date: <strong>{brand.requestedDate}</strong></p>
              )}
              {brand.submittedLink && (
                <p className="meta">URL: <a href={brand.submittedLink} target="_blank" rel="noreferrer">{brand.submittedLink}</a></p>
              )}
              {brand.uploadedWork && (
                <p className="meta">Uploaded work: <strong>{brand.uploadedWork}</strong></p>
              )}
              {brand.submittedDate && !brand.requestedDate && (
                <p className="meta">Submitted date: <strong>{brand.submittedDate}</strong></p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CollaborationStatus;
