import React from "react";
import InputField from "../../components/Inputs/InputField";
import Button from "../../components/Buttons/Button";
import { HiUsers } from "react-icons/hi2";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../../api/Categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const CategorySchema = z.object({
  name: z.string(),
  image: z
    .any()
    .refine((value) => value instanceof FileList && value.length > 0, {
      message: "Please upload at least one file",
    }),
});
type FormType = z.infer<typeof CategorySchema>;
const AddCategory: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormType>({
    resolver: zodResolver(CategorySchema),
  });
  const { mutate } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      toast.success("category Added Successfully");
      reset();
    },
  });
  const handleSubmition = (data: FormType) => {
    mutate(data);
  };
  return (
    <div>
      <div className="p-4">
        <h1 className="text-base uppercase font-bold flex items-center gap-2 ">
          <HiUsers size={20} />
          Add Category
        </h1>
      </div>
      <hr />
      <form
        action=""
        className="p-3 mt-5"
        onSubmit={handleSubmit(handleSubmition)}
      >
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField
            type="text"
            label="Name of Category"
            {...register("name")}
          />
          <InputField
            type="file"
            label="Image of Category"
            {...register("image")}
          />
        </div>
        <div className="mt-7 flex justify-center">
          <Button
            isRed={false}
            isWhite={true}
            text="Add the Category"
            className="border shadow-custom-shadow"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
