import React from "react";
import PageSection from "../components/layout/PageSection";
import CheckBox from "../components/Inputs/CheckBox";
import Button from "../components/Buttons/Button";

const checkBoxData = {
  id: 0,
  text: "Remember Me",
};
const Login: React.FC = () => {
  return (
    <>
      <PageSection pageHead="Login" />
      <div className="bg-color-light-gray py-20 w-1/2 mx-auto my-20 rounded-lg">
        <h1 className="text-center text-3xl text-color-heading font-extrabold">
          Login Into Your Account
        </h1>
        <div className="flex flex-col gap-5 w-3/5 mx-auto mt-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm font-semibold ">
              Username or email address
            </label>
            <input
              type="text"
              className="text-sm border border-gray-300 px-2 py-2 focus:outline-none rounded"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-sm font-semibold ">
              Password*
            </label>
            <input
              type="password"
              className="text-sm border border-gray-300 px-2 py-2 focus:outline-none rounded"
            />
          </div>
          <CheckBox checkBoxData={checkBoxData} handler={() => {}} />
          <Button text="Login" isRed={true} isWhite={false} />
          <p className="text-color-heading font-bold">
            Lost the Last Password ?
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
