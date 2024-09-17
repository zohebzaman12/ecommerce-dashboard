import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <InfinitySpin
        visible={true}
        width="200"
        color="#1F8CD0"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default LoadingSpinner;
