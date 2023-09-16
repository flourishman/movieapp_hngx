import React from "react";
import Logo from "../images/Logo2.png";
import Star from "../images/Star.png";
import Video from "../images/video.png";
import NavRoute from "./NavRoute";
import NavBar from "./NavBar";
import { CiLogout } from "react-icons/ci";

const MoviesDetails = ({ title }) => {
  return (
    <div className="flex w-full h-[882px]">
      <div className="sidebar w-[226px] h-[882px] border border-slate-400 rounded-r-[3rem] bg-white shadow-md">
        <div className="mt-[52px] mx-5 mb-[85px]">
          <img src={Logo} alt="Logo" />
        </div>
        {/**Navbar  */}
        <div className="">
          <NavBar />
        </div>
        {/**Navbar Links */}
        {/* <div>
          <NavRoute />
        </div> */}
        <div className="w-[170px] h-[210px] border border-rose-700 rounded-xl bg-rose-100 mx-7 mt-[68px] mb-11 px-4 pt-8">
          <p className="text-gray-700 text-[15px] font-semibold">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-gray-400 text-[12px] leading-3 mt-1">
            50k people are playing now
          </p>
          <button className="text-sm rounded-full px-[17px] py-[6px] text-rose-700 bg-rose-300 mx-[10px] my-4">
            Start Playing
          </button>
        </div>
        <div className="w-full h-20 mx-10 mt-8 flex items-center space-x-2 pl-4 text-lg text-gray-700 font-bold">
          <CiLogout />
          <div>Logout</div>
        </div>
      </div>
      {/* right-section */}
      <div className="w-full h-[982px] pl-[37px] pr-[51px] mt-[38px]">
        <img src={Video} alt="" className="rounded-lg" />
        <div className="w-full flex space-x-8">
          {/* Left-div */}
          <div className="ml-[18px] mr-[26px] mt-[31px]">
            <div className="ml-[18px] mr-[26px]">
              <div className="flex items-center space-x-3 mb-[51px]">
                <p className="text-[23px] text-[#404040]">
                  Top Gun: Maverick • 2022 • PG-13 • 2h 10m
                </p>
                <button className="rounded-full px-[17px] py-[4px] bg-white shadow-sm border border-gray-300 text-rose-700 text-sm">
                  Action
                </button>
                <button className="rounded-full px-[17px] py-[4px] bg-white shadow-sm border border-gray-300 text-rose-700 text-sm">
                  Drama
                </button>
              </div>

              <p className="w-[574px]">
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </p>
            </div>
            <div className="ml-[18px] mr-[26px] my-[20px]">
              <p className="w-[574px] my-4">
                Director :{" "}
                <span className="text-rose-700">Joseph Kosinski</span>
              </p>
              <p className="w-[574px] my-4">
                Writers :{" "}
                <span className="text-rose-700">
                  {" "}
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="w-[574px] my-4">
                Stars :{" "}
                <span className="text-rose-700">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="ml-[18px] mr-[26px] mt-[40px]">
              <form className="w-[574px]">
                <div class="flex">
                  <label
                    for="search-dropdown"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Your Email
                  </label>
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-rose-700 border border-gray-300 rounded-lg hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                  >
                    Top rated movie #65{" "}
                    <svg
                      class="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mockups
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Templates
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Design
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Logos
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Awards 9 nominations..."
                      required
                    />
                    <button
                      type="submit"
                      class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-rose-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* right div */}
          <div className="mt-[32px]">
            <div className="flex space-x-4 items-center justify-center">
              <img src={Star} alt="" />
              <p>8.5 | 350k</p>
            </div>
            <div class="relative">
              <div class="absolute inset-y-9 left-6 flex items-center pl-8 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>

              <button className="text-white bg-rose-700 py-2 px-[86px] rounded-md mt-4 pl-24 text-center">
                See Showtimes
              </button>
            </div>
            <div class="relative">
              <div class="absolute inset-y-9 left-6 flex items-center pl-8 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

              <button className="text-gray-700 bg-rose-200 py-2 px-[52px] rounded-md mt-4 pl-24 text-center">
                More watch options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
