import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-4xl font-extrabold text-color-heading uppercase">
      {text}
    </h1>
  );
};

export default Heading;
