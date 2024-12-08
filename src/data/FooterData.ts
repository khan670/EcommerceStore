import { BsBoxSeam } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { TbHours24 } from "react-icons/tb";
import { Link } from "react-router-dom";

export const footerServices = [
  {
    icon: BsBoxSeam,
    heading: "Free Shipping",
    text: "Free shipping on orders over $65",
  },
  {
    icon: LiaShippingFastSolid,
    heading: "Free Returns",
    text: "30-days free return polic",
  },
  {
    icon: MdPayment,
    heading: "Secured Payment",
    text: "We accept all major credit card",
  },
  {
    icon: TbHours24,
    heading: "Support 24/7",
    text: "Top notch customer service",
  },
];

export const Stores = [
  { text: "New York", link: "/shop" },
  { text: "London SF", link: "/shop" },
  { text: "Los Angele", link: "/shop" },
  { text: "Paris", link: "/shop" },
  { text: "kasWegas", link: "/shop" },
];
export const ShopCategories = [
  { text: "New Arrivals", link: "/shop-grid" },
  { text: "Best Selling", link: "/shop-grid" },
  { text: "Vegetables", link: "/shop-grid" },
  { text: "Fresh Meat", link: "/shop-grid" },
  { text: "Fresh Seafood", link: "/shop-grid" },
];

export const UseFullLinks = [
  { text: "Privacy Policy", link: "/faqs" },
  { text: "Return Policy", link: "/faqs" },
  { text: "Contact Us", link: "/contact" },
  { text: "Our Sitemaps", link: "/shop" },
];
