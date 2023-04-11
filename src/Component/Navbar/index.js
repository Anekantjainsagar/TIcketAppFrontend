import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  return (
    <div className="bg-blue-500 flex items-center justify-center mobile:py-3 md:py-1.5">
      <img
        src="/Ticketing App Logo.jpg"
        style={{ width: "3%", marginRight: "0.5rem", borderRadius: "5rem" }}
      />
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

export default Navbar;
