import React, { useState } from "react";
import classes from "./Banner.module.css";
import BannerImg from "../../assets/book-img.svg";
import ContactModal from "../../Modals/ContactModal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={classes.banner}>
      {showModal && <ContactModal closeModal={showModalHandler} />}
      <img className={classes.mainImage} src={BannerImg} alt="" />
      <div className={classes.companyDescription}>
        <h1>Looking for a Place ?. We got some!</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus eos veniam autem est repellendus possimus quod perspiciatis culpa sint.</p> */}
        <p>
          Rent a beautiful house for your family, friends or just yourself.
          Choose from flats in societies, individual apartments, bungalows and
          villas.{" "}
        </p>
        <button className={classes.contactBtn} onClick={showModalHandler}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
