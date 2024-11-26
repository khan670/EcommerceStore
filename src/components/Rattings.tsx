import React from "react";
import { FaStar } from "react-icons/fa";

/**
 * Rattings component that renders a container for displaying ratings.
 */

const Rattings = ({ ratting }: { ratting: number }) => {
  const length = 5;
  const arr = Array(length).fill(0);
  return (
    <div className="flex gap-2">
      {arr.map((_, index) => {
        return (
          <FaStar
            className={`${
              index >= ratting ? "text-color-text-body" : "text-color-theme"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Rattings;
