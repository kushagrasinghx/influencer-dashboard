import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { dummyBrands } from '../data/brands';

const BrandCollaborate = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  
  // Find the brand by name (URL encoded)
  const brand = dummyBrands.find(b => 
    b.name.toLowerCase().replace(/\s+/g, '-') === brandName?.toLowerCase()
  );

  if (!brand) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Brand not found</p>
      </div>
    );
  }

  const collaborationOpportunities = [
    {
      title: '#GlowWithUs Challenge',
      description: 'Increase awareness for new skincare launch',
      medium: 'Instagram reel',
      requirements: [
        'Must have 10k+ followers',
        'Use specific hashtags',
        'Mention brand in caption'
      ],
      guidelines: [
        'Avoid mentioning competitors',
        'Submit draft before posting'
      ],
      deadline: 'May 30, 2025'
    },
    {
      title: '#GlowWithUs Challenge',
      description: 'Increase awareness for new skincare launch',
      medium: 'Instagram reel',
      requirements: [
        'Must have 10k+ followers',
        'Use specific hashtags',
        'Mention brand in caption'
      ],
      guidelines: [
        'Avoid mentioning competitors',
        'Submit draft before posting'
      ],
      deadline: 'May 30, 2025'
    },
    {
      title: '#GlowWithUs Challenge',
      description: 'Increase awareness for new skincare launch',
      medium: 'Instagram reel',
      requirements: [
        'Must have 10k+ followers',
        'Use specific hashtags',
        'Mention brand in caption'
      ],
      guidelines: [
        'Avoid mentioning competitors',
        'Submit draft before posting'
      ],
      deadline: 'May 30, 2025'
    },
    {
      title: '#GlowWithUs Challenge',
      description: 'Increase awareness for new skincare launch',
      medium: 'Instagram reel',
      requirements: [
        'Must have 10k+ followers',
        'Use specific hashtags',
        'Mention brand in caption'
      ],
      guidelines: [
        'Avoid mentioning competitors',
        'Submit draft before posting'
      ],
      deadline: 'May 30, 2025'
    }
  ];

  return (
    <div className="font-sans">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
        <button 
          onClick={() => navigate('/')}
          className="hover:text-[#9F1D35] transition-colors"
        >
          Dashboard
        </button>
        <span>›</span>
        <span className="text-gray-900">Brand Collaborate Details</span>
      </div>

      {/* Hero Section */}
      <div 
        className="relative h-40 rounded-2xl mb-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8D5C4 0%, #F5E6D3 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-4 left-8">
          <div className="w-12 h-12 bg-green-200 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-8 right-20">
          <div className="w-8 h-8 bg-amber-800 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-4 right-32">
          <div className="w-6 h-6 bg-white rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-10 h-10 bg-green-300 rounded-full opacity-50"></div>
        </div>
        
        {/* Brand name centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-700">{brand.name}</h1>
        </div>
      </div>

      {/* Brand Info Section */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex items-start gap-6">
          {/* Brand Logo */}
          <div className="bg-gray-800 p-4 rounded-2xl flex-shrink-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-16 h-16 object-contain filter brightness-0 invert"
            />
          </div>

          {/* Brand Details */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} fill="#FEC84B" color="#FEC84B" />
                ))}
                <Star size={16} fill="#FEC84B" color="#FEC84B" className="opacity-50" />
                <span className="text-sm font-medium text-gray-700 ml-1">{brand.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <button className="bg-[#9F1D35] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#8a1a2e] transition-colors">
                Collaborate
              </button>
              <span className="text-sm text-gray-600">
                Participate Creators: <strong>10</strong>
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {brand.desc || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            </p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {brand.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-[#fce8ec] text-[#9F1D35] text-sm px-4 py-1 rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Opportunities */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Collaboration opportunity</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborationOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-5">
              <h4 className="font-bold text-gray-900 mb-2">{opportunity.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{opportunity.description}</p>

              {/* Medium */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">📱 Medium :</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-red-500">+</span>
                  <span>{opportunity.medium}</span>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">📋 Requirements :</span>
                </div>
                <div className="space-y-1">
                  {opportunity.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start gap-1 text-sm text-gray-600">
                      <span className="text-red-500 mt-0.5">+</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">📝 Guidelines :</span>
                </div>
                <div className="space-y-1">
                  {opportunity.guidelines.map((guideline, guideIndex) => (
                    <div key={guideIndex} className="flex items-start gap-1 text-sm text-gray-600">
                      <span className="text-red-500 mt-0.5">+</span>
                      <span>{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deadline */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">⏰ Deadline :</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-red-500">+</span>
                  <span>{opportunity.deadline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCollaborate;