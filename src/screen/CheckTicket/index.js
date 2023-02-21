import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Utils/index";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";

const CheckTicket = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState();
  const history = useNavigate();

  useEffect(() => {
    if (email) {
      setResponse("");
    }
  }, [email]);

  const CheckTicket = () => {
    axios
      .post(`${BASE_URL}/checkEmail`, { email })
      .then((res) => {
        console.log(res);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex items-center flex-col justify-center"
      style={{
        width: "100vw",
        height: "82vh",
      }}
    >
      <h1 className="font-bold text-2xl py-2 text-blue-700">
        Enter Your Details
      </h1>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your email"
        className="my-1 text-center mobile:w-7/12 md:w-3/12 mx-auto border rounded-xl outline-none border-black px-2 py-1"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mobile:w-4/12 md:w-1/12 my-1 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          if (email) {
            CheckTicket();
          }
        }}
      >
        Check Now
      </button>
      <p
        className="py-1 underline cursor-pointer hover:text-gray-700"
        onClick={() => {
          history("/");
        }}
      >
        Buy a new Ticket?
      </p>
      {response?._id?.length > 0 ? (
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-blue-700 font-bold text-2xl">Ticket Exists..</h1>
          <p>{response?.name}</p>
          <p>{response?.enrollment}</p>
          <div className="py-2">
            <QRCodeSVG value={response?._id} />
          </div>
        </div>
      ) : (
        <p className="text-red-700 font-bold text-2xl mt-5">
          {response ? "Ticket Doesn't Exists" : null}
        </p>
      )}
    </div>
  );
};

export default CheckTicket;