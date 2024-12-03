import React from "react";
import PageSection from "../components/layout/PageSection";
import CheckBox from "../components/Inputs/CheckBox";
import Button from "../components/Buttons/Button";
import InputField from "../components/Inputs/InputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/Users";
import { toast } from "react-toastify";

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
const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 1 characters long")
    .max(100, "Name must be at most 100 characters long"),
  email: z
    .string()
    .email("Email must be valid")
    .min(1, "Email must be at least 1 characters long")
    .max(100, "Email must be at most 100 characters long"),
  password: z
    .string()
    .min(1, "Password must be at least 1 characters long")
    .max(100, "Password must be at most 100 characters long"),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const { mutate, isSuccess } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      reset();
      toast.success("User created successfully");
    },
    onError: (error) => toast.error(error.message),
  });
  const handleFormSubmit = (data: FormSchemaType) => {
    const userData = {
      ...data,
      role: "customer",
      avatar: "https://i.imgur.com/yhW6Yw1.jpg",
    };
    mutate(userData);
    isSuccess && localStorage.setItem("user", JSON.stringify(userData));
    console.log(userData);
  };
  return (
    <div>
      <PageSection pageHead="Account Register" />
      <div className="bg-color-light-gray py-20 w-1/2 mx-auto my-20 rounded-lg">
        <h1 className="text-center text-3xl text-color-heading font-extrabold">
          Login Into Your Account
        </h1>
        <form
          className="flex flex-col gap-5 w-4/6 mx-auto mt-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <InputField label="Username " type="text" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 -mt-3 text-xs font-medium">
              {errors.name?.message}
            </p>
          )}
          <InputField
            label="Email Address "
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 -mt-3 text-xs font-medium">
              {errors.email?.message}
            </p>
          )}
          <InputField
            label="Password*"
            type="password"
            {...register("password")}
          />
          {errors.email && (
            <p className="text-red-500 -mt-3 text-xs font-medium">
              {errors.email?.message}
            </p>
          )}
          {CheckBoxData.map((value) => (
            <CheckBox checkBoxData={value} handler={() => {}} key={value.id} />
          ))}
          <Button text="Login" isRed={true} isWhite={false} />
          <p className="text-color-heading font-bold">
            Already have an account? Log in
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
