import React from 'react';

function Promotions() {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Promotions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">20% off on all shoes</h2>
          <p>Expires: Sept 30, 2024</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            Manage Promotion
          </button>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Buy one get one free - T-shirts</h2>
          <p>Expires: Oct 15, 2024</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            Manage Promotion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
