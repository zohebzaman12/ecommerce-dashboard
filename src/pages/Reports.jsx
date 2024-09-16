import React from "react";

function Reports() {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Sales Report</h2>
          <p>Last updated: Today</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Report
          </button>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Inventory Report</h2>
          <p>Last updated: Yesterday</p>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reports;
