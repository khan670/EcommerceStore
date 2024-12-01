import React from "react";
import PageSection from "../components/layout/PageSection";
import CheckBox from "../components/Inputs/CheckBox";
import Button from "../components/Buttons/Button";
import InputField from "../components/Inputs/InputField";

const CheckBoxData = [
  {
    id: 0,
    name: "Subscribe to stay updated with new products and offers!",
  },
  {
    id: 1,
    name: "I accept the Terms / Privacy Policy",
  },
];

const Register: React.FC = () => {
  return (
    <div>
      <PageSection pageHead="Account Register" />
      <div className="bg-color-light-gray py-20 w-1/2 mx-auto my-20 rounded-lg">
        <h1 className="text-center text-3xl text-color-heading font-extrabold">
          Login Into Your Account
        </h1>
        <div className="flex flex-col gap-5 w-4/6 mx-auto mt-10">
          <InputField label="Username " type="text" />
          <InputField label="Email Address " type="email" />
          <InputField label="Password*" type="password" />
          {CheckBoxData.map((value) => (
            <CheckBox checkBoxData={value} handler={() => {}} key={value.id} />
          ))}
          <Button text="Login" isRed={true} isWhite={false} />
          <p className="text-color-heading font-bold">
            Already have an account? Log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
