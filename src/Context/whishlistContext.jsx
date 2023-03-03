import React, { useState } from "react";

const WishlistContext = React.createContext();

export const WishlistContextProvider = (props) => {
    
    const [wishlist, setWishlist] = useState([]);

    return(
        <WishlistContext.Provider value={{wishlist , setWishlist}}>
            {props.children}
        </WishlistContext.Provider>
    )

}

export default WishlistContext;