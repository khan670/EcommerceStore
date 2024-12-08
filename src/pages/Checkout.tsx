import React, { useEffect } from "react";
import PageSection from "../components/layout/PageSection";
import Heading from "../components/Heading";
import InputField from "../components/Inputs/InputField";
import Button from "../components/Buttons/Button";
import { useSelector } from "react-redux";
import { InitialStateType } from "../store/CartSlice";
import { CartData } from "../Types/ShopTypes";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const FormSchema = z.object({
  email: z.string().email("Email must be valid").min(1, "Email is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal Code is required"),
});
type FormType = z.infer<typeof FormSchema>;
const Checkout: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const { cartData, taxPrice } = useSelector(
    (state: { cart: InitialStateType }) => state.cart
  );
  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });
  useEffect(() => {
    document.title = "Roiser - Checkout";
  });
  const formSubmition = (data: FormType) => {
    console.log(data);
    toast.success("We'll contact you later.Your Order is placed");
    localStorage.removeItem("cart");
  };
  const totalPrice = cartData.reduce(
    (acc: number, item: CartData) => acc + item.price * (item?.quantity || 1),
    0
  );
  const totalPriceWithTax = totalPrice * (1 + taxPrice / 100);
  if (!userData.email)
    return (
      <div className="h-full text-center my-10 text-2xl capitalize font-bold ">
        please login first
      </div>
    );
  return (
    <div>
      <PageSection pageHead="Checkout" />
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 px-3 gap-5">
        <div>
          <Heading text="Billing Details" className="!text-2xl" />
          <form
            className="flex flex-col gap-3 mt-5"
            onSubmit={handleSubmit(formSubmition)}
          >
            <InputField
              label="Email Address*"
              type="email"
              {...register("email")}
            />
            <div className="flex gap-3 w-full">
              <InputField
                label="First Name*"
                type="text"
                className="w-full"
                {...register("firstName")}
              />
              <InputField label="Last Name*" type="text" className="w-full" />
            </div>
            <InputField label="Address*" type="text" {...register("address")} />
            <InputField label="City*" type="text" {...register("city")} />
            <InputField label="Phone*" type="number" {...register("phone")} />
            <InputField
              label="Post code*"
              type="text"
              {...register("postalCode")}
            />
          </form>
        </div>
        <div>
          <Heading text="Your order" className="!text-2xl" />
          <div className="p-5 mt-5 bg-color-light-gray border border-gray-300 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-base uppercase font-bold text-color-text-body">
                product
              </h1>
              <h1 className="text-base uppercase font-bold text-color-text-body">
                Price
              </h1>
            </div>
            <hr />
            {cartData.map((value) => (
              <>
                <div className="mt-4 pb-4 flex gap-5 items-center ">
                  <img
                    src={value.images[0]}
                    alt=""
                    loading="lazy"
                    width={70}
                    height={70}
                    className="rounded"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm text-color-theme font-medium uppercase">
                      {value.title}
                    </h1>
                    <h1 className="text-lg capitalize font-extrabold">
                      {value.category.name}
                    </h1>
                  </div>
                  <p className="text-base ml-auto uppercase font-bold text-color-text-body">
                    ${value.price.toFixed(2)}
                  </p>
                </div>
                <hr />
              </>
            ))}
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                subtotal
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-heading">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                Tax Rate
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-heading">
                {taxPrice.toFixed(2)}%
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                Total Price:
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-theme">
                ${totalPriceWithTax.toFixed(2)}
              </p>
            </div>
            <Button
              text="Place your order "
              isRed={true}
              isWhite={false}
              className="w-full mt-5
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
