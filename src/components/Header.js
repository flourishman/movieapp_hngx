import React from "react";
import Logo from "../images/Logo.png";
import Icon from "../images/Icon.png";

export default function Header() {
  return (
    <div className="absolute h-[5rem] w-full flex items-center justify-between px-[95px]">
      <div className="">
        <img src={Logo} alt="Logo" />
      </div>

      <form className="w-[525px] h-[36px] form-horizontal">
        <div class="relative">
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 py-1 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What do you want to watch?"
            required
          />
        </div>
      </form>

      <div className="flex space-x-5 items-center">
        <p className="text-white">Sign in</p>
        <img src={Icon} alt="" />
      </div>
    </div>
  );
}
