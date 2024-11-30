// get all Product
export const getAllProducts = async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const response = await data.json();
  return response;
};
// get single product by id
export const getSingleProduct = async (id: number) => {
  const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const response = await data.json();
  return response;
};
// get limited product by passing value to it
export const getLimitedProduct = async (numProduct: number) => {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=0&limit=${numProduct}`
  );
  const response = await data.json();
  return response;
};
