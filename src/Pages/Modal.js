import React from "react";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";

const Modal = ({ children, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-75 flex items-center justify-center">
      <div className="p-[30px] max-w-lg rounded-lg bg-white m-auto">
        <div className="flex justify-end">
          <BsXCircle
            // TODO:
            onClick={handleClose}
            className="font-bold fill-red-600 cursor-pointer text-2xl"
          />
        </div>
        <img
          src="https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188"
          className="w-[70px] h-[70px] m-auto"
        />
        <h2 className="text-center font-bold">Explore the Gamification</h2>
        <p>The Learning platform with Fun and Joy.</p>
        <div className="w-full lg:mr-[20px] flex justify-center items-center h-10 mt-[20px]">
          <Link to="/Signin">
            <a
              href=""
              className="bg-blue-600 px-[15px] py-[7px] rounded-lg text-white hover:bg-white hover:text-cyan-500 hover:border-sky-400"
            >
              Login
            </a>
            <button onClick={handleClose}>Click</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
