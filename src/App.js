import React from "react";
import Login from "./screen/Login";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import { Route, Routes } from "react-router-dom";
import CheckTicket from "./screen/CheckTicket";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/check-ticket" element={<CheckTicket />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
