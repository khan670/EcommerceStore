import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { CategoryType } from "../../Types/ShopTypes";
import { GoSquare } from "react-icons/go";

interface CheckBoxProps {
  checkBoxData: CategoryType;
  handler: (id: number | string | undefined) => void;
  checked?: number | string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checkBoxData,
  handler,
  checked,
}) => {
  const checkedValue = checkBoxData.id === checked;
  return (
    <div className="flex items-center text-base text-color-heading ">
      <input
        type="checkbox"
        className="hidden"
        onChange={() => handler(checkBoxData?.id)}
        id={checkBoxData?.id?.toString()}
        checked={checkedValue}
      />
      <span
        className={`${
          checkedValue ? "text-color-theme" : "text-color-text-body"
        } inline-block  rounded-full`}
      >
        {checkedValue ? (
          <BiSolidCheckboxChecked size={25} />
        ) : (
          <GoSquare size={25} />
        )}
      </span>
      <label
        htmlFor={checkBoxData?.id?.toString()}
        className=" ml-2 font-medium"
      >
        {checkBoxData.name}
      </label>
    </div>
  );
};

export default CheckBox;
