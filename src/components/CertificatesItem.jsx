import React from 'react';

const CertificateItem = ({ title, image, onClick }) => {
  return (
    <div className="m-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <img 
        src={image} 
        alt={title} 
        className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={onClick}
      />
    </div>
  );
};

export default CertificateItem;
