import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const Footer = () => {
  return (
    <div className="w-full h-[145px] mt-[147px] mb-10">
      <div className="flex items-center justify-center space-x-10">
        <a href="https://web.facebook.com/sulyman.hammed.54" role="button">
          {/* <!-- Facebook --> */}
          <img src={facebook} alt="Facebook Icon" />
        </a>

        <a href="https://twitter.com/HammedSulyman3" role="button">
          {/* <!-- Instagram --> */}
          <img src={instagram} alt="instagram Icon" />
        </a>

        <a href="https://twitter.com/HammedSulyman3" role="button">
          {/* <!-- Google --> */}
          <img src={twitter} alt="twitter Icon" />
        </a>

        <a href="https://www.instagram.com/hammed.sulyman/" role="button">
          {/* <!-- Twitter --> */}
          <img src={youtube} alt="youtube Icon" />
        </a>
      </div>
      <div className="mt-9">
        <ul className="flex items-center justify-center space-x-10 text-gray-700 text-lg font-bold">
          <li>
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            <a href="#">Privacy & Policy</a>
          </li>
          <li>
            <a href="#">Press Room</a>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <p className="text-gray-700 text-lg">
          © 2021 MovieBox by Sulyman Hammed
        </p>
      </div>
    </div>
  );
};

export default Footer;
