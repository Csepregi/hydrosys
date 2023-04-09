import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Companyhistory from "../Companyhistory";

const Sidebar = () => {
  const menus = [
    { name: "Cégtörténet", link: "/", icon: MdOutlineDashboard },
    // { name: "Munkatársaink", link: "/", icon: AiOutlineUser },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-1">
      <div
        className={`left-0 min-h-screen bg-blue-700 ${
          open ? "w-72" : "w-16"
        } px-4 text-gray-100 duration-500`}
      >
        <div className="flex justify-end py-3">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="relative mt-4 flex flex-col gap-4">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`group flex items-center gap-3.5  rounded-md p-2 text-sm font-medium hover:bg-gray-800`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "translate-x-28 overflow-hidden opacity-0"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl font-semibold text-gray-900">
        <Companyhistory />
      </div>
    </section>
  );
};

export default Sidebar;
