import React from "react";

interface PropType {
  text: string;
  className?: string;
}

const Heading: React.FC<PropType> = ({ text, className }) => {
  return (
    <h1
      className={`text-4xl font-extrabold text-color-heading uppercase ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
