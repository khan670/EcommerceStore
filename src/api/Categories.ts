export const getCategories = async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/categories");
  const response = await data.json();
  return response;
};
