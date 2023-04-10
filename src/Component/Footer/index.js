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
    </div>
  );
};

export default Footer;
