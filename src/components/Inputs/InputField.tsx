import React from "react";

interface InputFieldProps {
  label?: string;
  type: string;
  className?: string;
  placeholder?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, className, placeholder, ...inputParams }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor="" className="text-sm font-semibold ">
          {label}
        </label>
        <input
          type={type}
          {...inputParams}
          ref={ref}
          placeholder={placeholder}
          className="text-sm border border-gray-300 px-2 py-2 focus:outline-none rounded"
        />
      </div>
    );
  }
);
InputField.displayName = "InputField";

export default InputField;
