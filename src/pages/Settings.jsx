import React from "react";

function Settings() {
  return (
    <div className="container mx-auto p-4 font-worksans">
      <h1 className="font-semibold text-2xl mb-4">Settings</h1>
      <div className="settings-list grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Profile Settings</h2>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
        <div className="bg-customGrayLighter p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">System Preferences</h2>
          <button className="mt-4 bg-customBlue hover:bg-customBlue-dark text-white font-bold py-2 px-4 rounded">
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
