import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Modal from "./Modal";

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar />
      {showModal && <Modal handleClose={handleClose} />}
    </>
  );
};

export default HomePage;
