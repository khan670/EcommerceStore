import React from "react";
import { MdAddBox } from "react-icons/md";
import InputField from "../components/Inputs/InputField";
import Button from "../components/Buttons/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { addProductToStore } from "../api/Product";
import { useMutation } from "@tanstack/react-query";

const FormSchema = z.object({
  title: z
    .string()
    .min(0, "must be grater than 0")
    .max(20, "Maximum character should be less then or equal to 20"),
  price: z.string(),
  discription: z
    .string()
    .min(0, "must be grater than 0")
    .max(150, "Maximum character should be less then or equal to 150"),
  categoryId: z
    .string()
    .min(1, "minimum Category Id should be grater than 1")
    .max(20, "Maximum number should be less than 20 or equal to 0 "),
  images: z
    .any()
    .refine((value) => value instanceof FileList && value.length > 0, {
      message: "Please upload at least one file",
    }),
});
export type formType = z.infer<typeof FormSchema>;
const AddProduct: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<formType>({
    resolver: zodResolver(FormSchema),
  });
  const { mutate } = useMutation({
    mutationFn: addProductToStore,
    onSuccess: () => {
      toast.success("Product Added Successfully");
      reset();
    },
  });
  const handleForm = (data: formType) => {
    const ProductData = {
      ...data,
      images: data.images[0].name,
    };
    mutate(ProductData);
  };
  return (
    <div>
      <div className="p-4">
        <h1 className="text-base uppercase font-bold flex items-center gap-2 ">
          <MdAddBox size={20} />
          Add Product
        </h1>
      </div>
      <hr />
      <form action="" className="p-3 mt-5" onSubmit={handleSubmit(handleForm)}>
        <div className="grid grid-cols-2 gap-3">
          <InputField type="text" label="Title" {...register("title")} />
          <InputField type="string" label="Price" {...register("price")} />
          <InputField
            type="text"
            label="Discription"
            {...register("discription")}
          />
          <InputField
            type="string"
            label="Category Id"
            {...register("categoryId")}
          />
          <InputField
            type="file"
            label="Product Images"
            {...register("images")}
          />
        </div>
        <div className="mt-7 flex justify-center">
          <Button
            type="submit"
            isRed={false}
            isWhite={true}
            text="Add the Product"
            className="border shadow-custom-shadow"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
