import React, { useContext } from "react";
import classes from "./Mainsection.module.css";
import PropertyCard from "./PropertyCard";
import propertyContext from "../../Context/propertyContext";

const Mainsection = ({ isFiltered, filteredSearch }) => {
  const { properties } = useContext(propertyContext);

  // const isAddedtoWish = (setIsAddedWish) => {
  //   setIsAddedWish();
  // };

  return (
    <section className={classes.Mainsection}>
      {isFiltered && filteredSearch.length < 1 && (
        <h1 className={classes.noSearch}>No filter Matched🙁!</h1>
      )}
      {isFiltered
        ? filteredSearch.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        : properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
    </section>
  );
};

export default Mainsection;
