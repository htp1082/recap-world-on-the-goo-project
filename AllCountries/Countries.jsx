import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countryApi }) => {
  // visited countries
  const [visitedCountries, setVisitedCountries] = useState([]);

  const visitedHandleCountries = (country) => {
    // console.log("visitedCountries was clicked",country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //   visited flag
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
    // console.log('visited flag',flag)
  };

  const countryUrl = use(countryApi);
  return (
    <div className="center">
      <h2 className="left">Total Country: {countryUrl.countries.length}</h2>
      <h3 className="left">Total visited country: {visitedCountries.length}</h3>
      <ol className="left">
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="imgae">
        {visitedFlag.map((image, index) => (
          <img key={index} src={image}></img>
        ))}
      </div>
      <div className="grid">
        {countryUrl.countries.map((country) => (
          <Country
            key={country.ccn3?.ccn3}
            country={country}
            visitedHandleCountries={visitedHandleCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
