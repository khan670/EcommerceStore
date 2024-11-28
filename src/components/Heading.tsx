import React from "react";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`text-4xl font-extrabold text-color-heading uppercase ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
