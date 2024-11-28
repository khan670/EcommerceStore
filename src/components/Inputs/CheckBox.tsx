import React, { useState } from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { CheckBoxDataType } from "../../Types/ShopTypes";
import { GoSquare } from "react-icons/go";

interface CheckBoxProps {
  checkBoxData: CheckBoxDataType;
  handler: (id: number) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checkBoxData, handler }) => {
  const [checked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center text-base text-color-heading ">
      <input
        type="checkbox"
        className="hidden"
        onChange={() => {
          setIsChecked((prev) => !prev);
          handler(checkBoxData.id);
        }}
        id={checkBoxData.id.toString()}
        checked={checked}
      />
      <span
        className={`${
          checked ? "text-color-theme" : "text-color-text-body"
        } inline-block  rounded-full`}
      >
        {checked ? (
          <BiSolidCheckboxChecked size={25} />
        ) : (
          <GoSquare size={25} />
        )}
      </span>
      <label htmlFor={checkBoxData.id.toString()} className=" ml-2 font-medium">
        {checkBoxData.text}
      </label>
    </div>
  );
};

export default CheckBox;
