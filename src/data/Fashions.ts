import { FashionsDataType } from "../Types/HomeType";
import { CheckBoxDataType } from "../Types/ShopTypes";

export const FashionsData: FashionsDataType[] = [
  {
    id: 1,
    imgUrl: "/fashion-1.png",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 2,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
  {
    id: 2,
    imgUrl: "/fashion-2.png",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 4,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
  {
    id: 3,
    imgUrl: "/fashion-3.png",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 3,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
  {
    id: 4,
    imgUrl: "/fashion-4.png",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 3,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
];

export const CollectionsData = [
  {
    imgUrl: "/collection-1.png",
    numProducts: 1500,
    collection: "Women Collections",
    text: "This is genuinely the first theme i bought for which i did not had to write one line of code.",
    collections: [
      "Blazer",
      "Blouses & Shirts",
      "Dresser",
      "Jeans",
      "Knits",
      "Pants",
      "Skirts",
      "Suits",
      "Sweatshirts & Hoodie",
      "T-Shirts",
      "Tops & Bodysuits",
    ],
  },
  {
    imgUrl: "/collection-2.png",
    numProducts: 1200,
    collection: "men Collections",
    collections: ["Blazer", "Blouses & Shirts", "Dresser", "Jeans"],
  },
  {
    imgUrl: "/collection-3.png",
    numProducts: 1000,
    collection: "Top Accessories",
    collections: ["Blazer", "Blouses & Shirts", "Dresser", "Jeans"],
  },
];

export const ShopCardData = [
  {
    id: 1,
    imgUrl: "/shop-5.jpg",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 2,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
  {
    id: 1,
    imgUrl: "/shop-6.jpg",
    title: "LEVI'S COTTON",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.",
    rating: 2,
    totalRattings: 17,
    oldPrice: 2000,
    newPrice: 1500,
  },
];

export const sortedBtnData = [
  "Default Sorting",
  "Most Popular",
  "Date",
  "Trending",
];

export const CheckBoxData: CheckBoxDataType[] = [
  {
    id: 1,
    text: "Accessories (1)",
  },
  {
    id: 2,
    text: "Blazers (1)",
  },
  {
    id: 3,
    text: "Dresser (1)",
  },
  {
    id: 4,
    text: "Jeans (1)",
  },
  {
    id: 5,
    text: "Knits (1)",
  },
];

export const CheckBoxPrice: CheckBoxDataType[] = [
  {
    id: 12,
    text: "All",
  },
  {
    id: 11,
    text: "$0 - $50",
  },
  {
    id: 22,
    text: "$50 - $100",
  },
  {
    id: 334,
    text: "$100 - $200",
  },
  {
    id: 4423,
    text: "$200 - $300",
  },
  {
    id: 5312,
    text: "$300 - $400",
  },
];
