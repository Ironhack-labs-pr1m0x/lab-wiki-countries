import React from 'react';
import { Link } from 'react-router-dom';

export default function CountrySidebarList(props) {
  const countryListElements = props.countries.map((country, index) => {
    return (
      <Link key={index} to={`/details/${country.cca3.toLowerCase()}`}>
        <div
          style={{
            padding: '15px',
            display: 'flex',
            gap: '10px',
            border: '1px solid black',
          }}
        >
          <p style={{ fontSize: '20px' }}>{country.flag}</p>
          <p>{country.name.official}</p>
        </div>
      </Link>
    );
  });

  return <div>{countryListElements}</div>;
}
