import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  return (
    <div className="bg-blue-500 flex items-center justify-center mobile:py-3 md:py-1.5">
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
