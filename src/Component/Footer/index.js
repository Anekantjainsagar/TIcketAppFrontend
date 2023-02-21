import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const history = useNavigate();
  return (
    <div className="bg-blue-500 flex items-center justify-evenly py-2">
      <p
        className="text-white font-bold text-2xl cursor-pointer"
        onClick={() => {
          history("/");
        }}
      >
        Joyeux Fiesta
      </p>
      <p className="text-white text-base cursor-pointer">
        Created by <span className="hover:text-gray-300">Anekant Jain </span>
        <br />
        <span>+91 76920 45606</span>
      </p>
    </div>
  );
};

export default Footer;
