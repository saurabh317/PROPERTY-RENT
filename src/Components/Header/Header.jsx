import React, { useState } from "react";
import logo from "../../assets/icon.png";
import classes from "./Header.module.css";
import WishListModal from "../../Modals/WishListModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={classes.Header}>
      <WishListModal closeModal={showModalHandler} showModal={showModal} />
      <div className={classes["logo-section"]}>
        <div className={classes.logo}>
          <img alt="Logo" src={logo} />
          <span>Rent a property</span>
        </div>
        <span className={classes["logo-section__about"]}>
          live here forever.
        </span>
      </div>
      <nav className={classes.navigation}>Home</nav>
      <div className={classes.search} name="" id="">
        Affordable living with less maintenance🌿.
      </div>
      <div className={classes.save} onClick={showModalHandler}>
        Wishlist
      </div>
    </div>
  );
};

export default Header;
