import React from "react";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-base uppercase font-bold flex items-center gap-2 ">
          <MdAdminPanelSettings size={20} />
          admin
        </h1>
      </div>
      <hr />
      <div className="mt-5">
        <img
          src="/fashion-1.png"
          alt=""
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <div className="flex justify-evenly mt-10">
          <p className="flex items-center gap-1 text-base">
            <MdEmail />
            john@mail.com
          </p>
          <p className="flex items-center gap-1">
            <FaUser /> Change name
          </p>
          <p className="flex items-center gap-1">
            <MdAdminPanelSettings /> admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
