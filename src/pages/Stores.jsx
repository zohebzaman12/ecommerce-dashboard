import React from 'react'

const Stores = () => {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Stores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Downtown Store</h2>
          <p>Location: City Center</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Uptown Store</h2>
          <p>Location: North District</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stores