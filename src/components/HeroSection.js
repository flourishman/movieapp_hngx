import React from "react";
import Header from "./Header";
import bg from "../images/Poster.png";
import imdb from "../images/imdb.png";
import fruit from "../images/fruit.png";

export default function HeroSection() {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="h-[600px] w-full" style={style}>
      <Header />
      <div className="absolute top-[158px] left-[98px] font-sans font-bold ">
        <h1 className="text-white w-[404px] text-6xl leading-[106%]">
          John Wick 3 : Parabellum
        </h1>
        <div className="w-[218px] flex items-center justify-between mt-6">
          <div className="flex items-center justify-between space-x-3">
            <img src={imdb} alt="imdb" />
            <p className="text-white text-xs">86.0 / 100</p>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <img src={fruit} alt="" />
            <p className="text-white text-xs">97%</p>
          </div>
        </div>
        <p className="text-white text-sm w-[322px] mt-6 font-sans">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <div class="relative">
          <div class="absolute inset-y-9 left-1 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>

          <button className="text-white bg-rose-700 py-2 px-8 rounded-md mt-4 pl-12">
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
}
