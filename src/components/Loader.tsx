import React from "react";

const Loader: React.FC = ({ className }: { className?: string }) => {
  return (
    <div className={`h-screen ${className}`}>
      <div className="loader  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Loader;
