import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const history = useNavigate();
  return (
    <div className="bg-blue-500 flex items-center justify-evenly py-2 flex-col">
      <p
        className="text-white font-bold text-2xl cursor-pointer"
        onClick={() => {
          history("/");
        }}
      >
        Joyeux Fiesta
      </p>
      <p className="text-white">
        One Scan, One Ticket: QR Codes Simplify Your Event Experience!
      </p>
    </div>
  );
};

export default Footer;
