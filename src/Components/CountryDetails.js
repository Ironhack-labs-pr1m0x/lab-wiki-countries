import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const countryCode = props.match.params.id;
  const country = countries.find(
    (country) => country.cca3.toLowerCase() === countryCode
  );

  const borderCountries = country.borders.map((borderCountry, index) => {
    const countryName = countries.find((country) => {
      return country.cca3 === borderCountry;
    });

    return (
      <Link to={`/details/${borderCountry.toLowerCase()}`} key={index}>
        <li>{countryName.name.common}</li>
      </Link>
    );
  });

  return (
    <div style={{ padding: '25px' }}>
      <h1>{country.name.common}</h1>
      <h3>{country.capital}</h3>
      <h3>{country.area} km²</h3>
      {borderCountries && <ul>{borderCountries}</ul>}
    </div>
  );
}
