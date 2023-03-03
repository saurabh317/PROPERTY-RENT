import React, { useContext, useState } from "react";
import classes from "./Filter.module.css";
import propertyContext from "../../Context/propertyContext";

const Filter = (props) => {
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const { properties } = useContext(propertyContext);

  const changeLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  const changeWhenHandler = (event) => {
    setWhen(event.target.value);
  };
  console.log(when);

  const changePriceHandler = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };

  const changeTypeHandler = (event) => {
    setType(event.target.value);
  };

  const onSearchSubmitHandler = (event) => {
    event.preventDefault();

    let newFilteredSearch = properties;

    if (location.toString() === "IND") {
      newFilteredSearch = properties.filter(
        (property) => property.country === "IND"
      );
    }

    if (location.toString() === "USA") {
      newFilteredSearch = properties.filter(
        (property) => property.country === "USA"
      );
    }

    if (location.toString() === "UK") {
      newFilteredSearch = properties.filter(
        (property) => property.country === "UK"
      );
    }

    if (when.length > 0) {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => new Date(property.avaliablity) > new Date(when)
      );
    }

    if (price.toString() === "500") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.price < 1500
      );
    } else if (price.toString() === "1500") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.price > 1499 && property.price < 3000
      );
    } else if (price.toString() === "3000") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.price > 2999
      );
    }

    if (type.length > 0 && type === "house") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.type === "house"
      );
    }

    if (type.length > 0 && type === "apartment") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.type === "apartment"
      );
    }

    if (type.length > 0 && type === "villa") {
      newFilteredSearch = newFilteredSearch.filter(
        (property) => property.type === "villa"
      );
    }

    props.startFilterHandler(newFilteredSearch);
  };

  return (
    <div className={classes.filter}>
      <h3>Search properties to rent</h3>
      <form onSubmit={onSearchSubmitHandler}>
        <div className={classes.filterItem}>
          <label htmlFor="">Location</label>
          <select value={location} onChange={changeLocationHandler}>
            <option value="" selected>
              All location
            </option>
            <option value="UK">manchester, UK</option>
            <option value="IND">Mumbai, India</option>
            <option value="USA">New York, USA</option>
          </select>
        </div>
        <div className={classes.filterItem}>
          <label htmlFor="">When</label>
          <input
            onChange={changeWhenHandler}
            min="2023-02-21"
            max="2025-04-30"
            type="date"
          />
        </div>
        <div className={classes.filterItem}>
          <label htmlFor="">Price</label>
          <select onChange={changePriceHandler}>
            <option defaultValue="" selected>
              Any value
            </option>
            <option value="500">$500 - $1499</option>
            <option value="1500">$1500 - $2999</option>
            <option value="3000">$3000+</option>
          </select>
        </div>
        <div className={classes.filterItem}>
          <label htmlFor="">Property Type</label>
          <select onChange={changeTypeHandler}>
            <option value="" selected>
              all type
            </option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
        </div>
        <button type="submit" className={classes.filterBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
