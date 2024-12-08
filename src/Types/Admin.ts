import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdAddBox, MdAdminPanelSettings } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";

export const AdminNavigationLinks = [
  {
    id: 0,
    link: "/admin",
    linkText: "Add Product",
    iconLink: MdAddBox,
  },
  {
    id: 4,
    link: "/",
    linkText: "Home",
    iconLink: FaHome,
  },
  {
    id: 1,
    link: "addcategory",
    linkText: "Add Category",
    iconLink: RiFileAddFill,
  },
  {
    id: 2,
    link: "allusers",
    linkText: "All User",
    iconLink: HiUsers,
  },
  {
    id: 3,
    link: "profile",
    linkText: "Profile",
    iconLink: MdAdminPanelSettings,
  },
];
