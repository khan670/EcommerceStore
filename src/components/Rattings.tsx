import React from "react";
import { FaStar } from "react-icons/fa";

/**
 * Rattings component that renders a container for displaying ratings.
 */
interface PropType {
  ratting: number;
  color?: string;
}
const Rattings: React.FC<PropType> = ({ ratting, color }) => {
  const length = 5;
  const arr = Array(length).fill(0);
  return (
    <div className="flex gap-2">
      {arr.map((_, index) => {
        return (
          <FaStar
            className={`${
              index >= ratting
                ? "text-color-text-body"
                : `text-color-theme  ${color ? color : ""}`
            }`}
          />
        );
      })}
    </div>
  );
};

export default Rattings;
