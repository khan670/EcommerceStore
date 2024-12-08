import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AdminNavigationLinks } from "../../Types/Admin";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const Admin = () => {
  const navigate = useNavigate();
  const [navigationOpen, setIsNavigationOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")!);
  useEffect(() => {
    document.title = "Roiser - Admin Dashboard";
  });
  if (user.role !== "admin") return <div>Unauthorized</div>;
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="px-8 py-5 flex justify-between w-screen items-center">
        <img src="/logo-1.png" alt="" loading="lazy" />
        <h1 className="text-2xl font-bold md:block hidden">Admin Dashboard</h1>
        <RxHamburgerMenu
          size={30}
          className="md:hidden block"
          onClick={() => setIsNavigationOpen(true)}
        />
      </div>
      <div className="flex gap-4 px-6 py-4">
        <div className="shadow-custom-shadow w-1/5 p-5  rounded-lg hidden md:block">
          <img
            loading="lazy"
            src={user.avatar}
            width={120}
            height={120}
            alt=""
            className="rounded-full object-cover mx-auto"
          />
          <h1 className="text-lg font-bold text-center mt-5">{user.name}</h1>

          <div className="mt-8 flex flex-col gap-4 ">
            {AdminNavigationLinks.map((value) => {
              const Icon = value.iconLink;
              return (
                <NavLink
                  to={value.link}
                  end
                  className={`flex  p-2 items-center text-xs gap-2 rounded-lg uppercase`}
                >
                  <Icon size={15} />
                  {value.linkText}
                </NavLink>
              );
            })}
            <button
              className="flex mx-auto ml-auto  p-2 items-center text-xs gap-2 rounded-lg uppercase bg-blue-500 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex-1 shadow-custom-shadow rounded-lg">
          <Outlet />
        </div>
      </div>
      <div
        className={`shadow-custom-shadow w-[60%] md:hidden z-50 p-5 rounded-lg  block fixed h-screen top-0 transition-all duration-700 ${
          navigationOpen ? "right-0" : "-right-full"
        } overflow-auto bg-white`}
      >
        <span
          className="text-color-theme inline-block absolute top-3 right-5"
          onClick={() => setIsNavigationOpen(false)}
        >
          <FaTimes size={20} />
        </span>
        <img
          src={user.avatar}
          loading="lazy"
          width={120}
          height={120}
          alt=""
          className="rounded-full object-cover mx-auto"
        />
        <h1 className="text-lg font-bold text-center mt-5">{user.name}</h1>

        <div className="mt-8 flex flex-col gap-4 ">
          {AdminNavigationLinks.map((value) => {
            const Icon = value.iconLink;
            return (
              <NavLink
                to={value.link}
                end
                className={`flex  p-2 items-center text-xs gap-2 rounded-lg uppercase`}
              >
                <Icon size={15} />
                {value.linkText}
              </NavLink>
            );
          })}
          <button
            className="flex mx-auto ml-auto  p-2 items-center text-xs gap-2 rounded-lg uppercase bg-blue-500 text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
