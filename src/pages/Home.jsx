import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-customBlue text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">120</p>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-customBlue text-xl font-semibold">Sales Today</h2>
          <p className="text-2xl">$1,520</p>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-customBlue text-xl font-semibold">Active Promotions</h2>
          <p className="text-2xl">3</p>
        </div>
      </div>
      <div className="mt-8">
  <h2 className="text-customGrayDark text-2xl font-semibold mb-4">Recent Activity</h2>
  <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <span className="text-customGrayDark font-medium">📦 Added new product:</span> 
      <span className="text-customBlue ml-1">Nike Air Max 270</span> 
      <span className="block text-sm text-customGrayDark mt-1">10 minutes ago</span>
    </div>
    
    <div className="mb-4">
      <span className="text-customGrayDark font-medium">💵 Updated pricing for:</span> 
      <span className="text-customBlue ml-1">Adidas Ultraboost 22</span>
      <span className="block text-sm text-customGrayDark mt-1">30 minutes ago</span>
    </div>
    
    <div className="mb-4">
      <span className="text-customGrayDark font-medium">🏬 New store opened:</span> 
      <span className="text-customBlue ml-1">5th Avenue, New York</span>
      <span className="block text-sm text-customGrayDark mt-1">1 hour ago</span>
    </div>

    <div className="mb-4">
      <span className="text-customGrayDark font-medium">🔄 Stock updated for:</span> 
      <span className="text-customBlue ml-1">Apple iPhone 14 Pro</span>
      <span className="block text-sm text-customGrayDark mt-1">2 hours ago</span>
    </div>
    
    <div className="mb-4">
      <span className="text-customGrayDark font-medium">🛒 Large order placed by:</span> 
      <span className="text-customBlue ml-1">John Doe (Order #123456)</span>
      <span className="block text-sm text-customGrayDark mt-1">4 hours ago</span>
    </div>

    <div>
      <span className="text-customGrayDark font-medium">📝 Customer review received for:</span> 
      <span className="text-customBlue ml-1">Sony WH-1000XM5</span>
      <span className="block text-sm text-customGrayDark mt-1">5 hours ago</span>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
