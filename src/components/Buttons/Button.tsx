import React from "react";

interface Proptype {
  text: string;
  isRed: boolean;
  isWhite: boolean;
  className?: string;
  textColor?: string;
  handler?: () => void;
}

const Button: React.FC<Proptype> = ({
  text,
  isRed,
  isWhite,
  className,
  textColor,
  handler,
}) => {
  return (
    <button
      className={`text-base  py-3 px-6 font-bold ${
        isWhite && "bg-white text-color-theme"
      } ${
        isRed && "bg-color-theme text-white"
      }  rounded relative group overflow-hidden ${className}`}
      onClick={handler}
    >
      <div
        className={`absolute top-0 right-full w-full h-full  ${
          isRed && "bg-color-tranparent"
        } ${
          isWhite && "bg-color-heading"
        } mix-blend-multiply group-hover:right-0 transition-all duration-500 `}
      ></div>
      <span
        className={`relative z-20 inline-block ${
          isWhite && "group-hover:text-white text-color-theme"
        } 
      ${isRed && "text-white"}
      transition-all duration-500 font-semibold ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
