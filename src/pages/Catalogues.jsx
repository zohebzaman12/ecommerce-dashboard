import React from 'react'

const Catalogues = () => {
    return (
        <div className="container mx-auto p-4 font-worksans">
          <h1 className="font-semibold text-2xl mb-4">Catalogues</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Summer Collection 2024</h2>
              <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
                View Catalogue
              </button>
            </div>
            <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Winter Collection 2024</h2>
              <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
                View Catalogue
              </button>
            </div>
          </div>
        </div>
      );
}

export default Catalogues