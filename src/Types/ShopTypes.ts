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
