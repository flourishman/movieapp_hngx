import React from "react";
import { NavData } from "./NavData";
const NavBar = () => {
  return (
    <section>
      <div className="w-full grid grid-rows-4 items-center justify-center space-y-4">
        {NavData.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="flex space-x-3 items-center active:bg-rose-300 active:text-rose-700 h-12 ">
                <span className="">{item.icon}</span>
                <span className="">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NavBar;
