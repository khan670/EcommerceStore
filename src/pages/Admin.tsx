import { NavLink, Outlet } from "react-router-dom";
import { AdminNavigationLinks } from "../Types/Admin";

const Admin = () => {
  return (
    <>
      <div className="p-3">
        <img src="/logo-1.png" alt="" />
      </div>
      <div className="flex gap-4 px-6 py-4">
        <div className="shadow-custom-shadow w-1/5 p-5  rounded-lg">
          <img
            src="/fashion-1.png"
            width={120}
            height={120}
            alt=""
            className="rounded-full object-cover mx-auto"
          />
          <div className="mt-8 flex flex-col gap-4">
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
          </div>
        </div>
        <div className="flex-1 shadow-custom-shadow">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
