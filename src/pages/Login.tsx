import React from "react";
import PageSection from "../components/layout/PageSection";
import CheckBox from "../components/Inputs/CheckBox";
import Button from "../components/Buttons/Button";
import InputField from "../components/Inputs/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Authorization, login } from "../api/Authentication";

const checkBoxData = {
  id: 0,
  name: "Remember Me",
};

const loginFormSchema = z.object({
  email: z.string().email("Email must be valid").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be at least 8 characters long"),
});

type FormSchemaType = z.infer<typeof loginFormSchema>;
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });
  const { mutate } = useMutation({
    mutationFn: login,
  });
  const loginFormSubmition = async (data: FormSchemaType) => {
    console.log(data);
    await reset();
    await mutate(data);
    await Authorization();
  };
  return (
    <>
      <PageSection pageHead="Login" />
      <div className="bg-color-light-gray py-20 w-1/2 mx-auto my-20 rounded-lg">
        <h1 className="text-center text-3xl text-color-heading font-extrabold">
          Login Into Your Account
        </h1>
        <form
          className="flex flex-col gap-5 w-3/5 mx-auto mt-10"
          onSubmit={handleSubmit(loginFormSubmition)}
        >
          <InputField
            label="Username or email address"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs -mt-3">{errors.email.message}</p>
          )}
          <InputField
            label="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs -mt-3">
              {errors.password.message}
            </p>
          )}
          <CheckBox checkBoxData={checkBoxData} handler={() => {}} />
          <Button text="Login" isRed={true} isWhite={false} />
          <p className="text-color-heading font-bold">
            Lost the Last Password ?
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
