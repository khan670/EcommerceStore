import React from "react";
import PageSection from "../components/layout/PageSection";
import Heading from "../components/Heading";

const Login: React.FC = () => {
  return (
    <>
      <PageSection pageHead="Login" />
      <div className="bg-color-light-gray py-10 w-2/4 mx-auto mt-4 rounded-lg">
        <Heading text="Login Into Your Account" className="text-center" />
        <div className="flex flex-col gap-3 w-3/4 mx-auto">
          <label htmlFor="">Username or email address</label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Login;
