export interface CheckBoxDataType {
  id: number;
  name: string | number;
}
export interface ProductType {
  images: string[];
  title: string;
  id?: number;
  price: number;
}
export interface CategoryType {
  image?: string;
  id?: number | string;
  name: string;
}

export interface Product {
  cartData?: {
    id: number;
    images: string[];
    category: { name: string };
    title: string;
    price: number;
    description: string;
    quantity?: number;
  }[];
  cart?: {
    id: number;
    images: string[];
    category: { name: string };
    title: string;
    price: number;
    description: string;
    quantity?: number;
  };
}

export interface CartData {
  id: number;
  images: string[];
  category: { name: string };
  title: string;
  price: number;
  description: string;
  quantity?: number;
}
