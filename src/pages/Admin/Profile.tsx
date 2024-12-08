import React from "react";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-base uppercase font-bold flex items-center gap-2 ">
          <MdAdminPanelSettings size={20} />
          {user.name}
        </h1>
      </div>
      <hr />
      <div className="mt-5">
        <img
          loading="lazy"
          src={user.avatar}
          alt=""
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <div className="flex justify-evenly my-10">
          <p className="flex items-center gap-1 text-base">
            <MdEmail />
            {user.email}
          </p>
          <p className="flex items-center gap-1">
            <FaUser />
            {user.name}
          </p>
          <p className="flex items-center gap-1">
            <MdAdminPanelSettings /> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
