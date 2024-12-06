import { formType } from "../pages/AddProduct";

export const getCategories = async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/categories");
  const response = await data.json();
  return response;
};
export const addCategory = async (category: formType) => {
  const categoryData = await fetch(
    "https://api.escuelajs.co/api/v1/categories/",
    {
      method: "POST",
      headers: { "Content-Type": "appllication/json" },
      body: JSON.stringify(category),
    }
  );
  return categoryData;
};
