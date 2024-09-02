import React, { useState } from 'react'
import CertificateItem from './CertificatesItem'
import Python1 from '..//assets/google.png'
import Python2 from '..//assets/python.png'
import SQL from '..//assets/sql.png'

const certificates = [
  {
    title: 'Google',
    image: Python1,
  },
  {
    title: 'CFG',
    image: SQL,
  },
  {
    title: 'CFG',
    image: Python2,
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id='certificates' className="p-8">
      <h2 className="text-center text-5xl font-bold mb-6 text-purple-900">Certificates</h2>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((certificate, index) => (
          <CertificateItem 
            key={index} 
            title={certificate.title} 
            image={certificate.image} 
            onClick={() => handleImageClick(certificate.image)} 
          />
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
          onClick={closeModal}
        >
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Enlarged certificate" 
              className="max-w-full max-h-full rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 text-white text-2xl" 
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
