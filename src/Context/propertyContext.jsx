import React, { useState } from "react";
import propertyData from '../assets/PropertyData';

const propertyContext = React.createContext();


export const PropertyContextProvider = (props) => { 
    const [properties, setProperties] = useState(propertyData);
return (
    <propertyContext.Provider value={{properties, setProperties}}>
        {props.children}
    </propertyContext.Provider>
)
} 

export default propertyContext;