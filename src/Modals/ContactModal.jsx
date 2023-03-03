import React from "react";
import ReactDOM from "react-dom";
import classes from "./ContactModal.module.css";
import logo from "../assets/icon.png";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeModal} />;
  };
  
  const ModalOverlay = (props) => {
  
    return (
      <div className={classes.modal}>
        <div className={classes.logosec}>
            <img src={logo} alt="logo" />
            <span>Rent a property</span>
        </div>
        <form action="">
          <div className={classes.NamePh}>
            <div className={classes.forShape}>
                <label htmlFor="">Name:</label>
                <input type="text" />
            </div>
            <div className={classes.forShape}>
                <label htmlFor="">Phone:</label>
                <input type="number" />
            </div>
          </div>
          <div className={classes.forShape}>
            <label htmlFor="">email</label>
            <input type="email" />
          </div>
          <div className={classes.forShape}>
            <label htmlFor="">Message:</label>
            <textarea name="" id="" cols="30" rows="10">

            </textarea>
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    );
  };
  
  const ContactModal = (props) => {
  
    const closeModal = () => {
      props.closeModal();
    };
  
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop closeModal={closeModal} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay closeModal={closeModal}/>,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
    );
  };
  
  export default ContactModal;
  