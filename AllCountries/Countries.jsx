import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryApi}) => {
    const countryUrl = use(countryApi)
    return (
         <div className='center'>
      <h2 className='left'>Total Country: {countryUrl.countries.length}</h2>
      <div className='grid'>
        {countryUrl.countries.map((country) => (
          <Country
            key={country.ccn3?.ccn3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
    );
};

export default Countries;