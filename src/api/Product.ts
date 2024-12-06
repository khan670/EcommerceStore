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
export const getLimitedProduct = async (
  productStart: number,
  productEnd: number
) => {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${productStart}&limit=${productEnd}`
  );
  const response = await data.json();
  return response;
};

// get Product by category and price
export const getProductsByCategory = async (
  categoryId: number | string | undefined,
  startProduct: number,
  endProduct: number
) => {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${startProduct}&limit=${endProduct}&categoryId=${categoryId}`
  );
  const response = await data.json();
  return response;
};

export const addProductToStore = async (data) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: { "Content-Type": "appllication/json" },
    body: JSON.stringify(data),
  });
  return response;
};
