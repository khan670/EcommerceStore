import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-sm font-semibold ">
        {label}
      </label>
      <input
        type={type}
        className="text-sm border border-gray-300 px-2 py-2 focus:outline-none rounded"
      />
    </div>
  );
};

export default InputField;
