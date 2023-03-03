import React, { useContext } from "react";
import propertyContext from "../../../Context/propertyContext";
import WishlistContext from "../../../Context/whishlistContext";
import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { properties, setProperties } = useContext(propertyContext);

  const removeWishHandler = () => {
    const item = properties.map( e => {
      if(e.id === props.id){
       e.wishlisted = false
      } 
      return e;
    });

    setProperties(item);
    
    const newWishlist = wishlist.filter(
      (item) => item.id.toString() !== props.id.toString()
    );
    setWishlist(newWishlist);
  };

  return (
    <div className={classes.wishlistItem}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.price}>
        ${props.price}
        <span onClick={removeWishHandler}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </span>
      </span>
    </div>
  );
};

export default WishlistItem;
