import React from 'react';

function Docs() {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">API Documentation</h2>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Docs
          </button>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">User Guide</h2>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Docs;
