import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    branch: "",
    enrollment: "",
  });
  const [phone, setPhone] = useState();
  const [scholar, setScholar] = useState();
  const [year, setYear] = useState("Year");

  return (
    <div
      className="flex items-center flex-col justify-center"
      style={{
        width: "100vw",
        height: "82vh",
      }}
    >
      <h1 className="font-bold text-2xl py-2 text-blue-700">
        Hurry up! Book Now...
      </h1>
      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        placeholder="Enter your name"
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="Enter your email"
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <input
        type="number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        placeholder="Enter your phone"
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <input
        type="number"
        value={scholar}
        onChange={(e) => {
          setScholar(e.target.value);
        }}
        placeholder="Enter your scholar no."
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <input
        type="text"
        value={user?.enrollment}
        onChange={(e) => {
          setUser({ ...user, enrollment: e.target.value });
        }}
        placeholder="Enter your enrollment no."
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <select
        name="year"
        id=""
        className="border border-black py-1 px-2 my-1 mobile:w-7/12 md:w-3/12 outline-none text-center rounded-xl"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <option value="Year" disabled={true}>
          Year
        </option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <input
        type="text"
        value={user?.branch}
        onChange={(e) => {
          setUser({ ...user, branch: e.target.value });
        }}
        placeholder="Enter your branch"
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mobile:w-7/12 md:w-3/12 my-1 rounded-full">
        Go for payment
      </button>
      <p
        className="py-1 underline cursor-pointer hover:text-gray-700"
        onClick={() => {
          history("/check-ticket");
        }}
      >
        Already have ticket?
      </p>
    </div>
  );
};

export default Login;
