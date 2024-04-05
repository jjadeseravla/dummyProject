import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import IndividualCountry from './IndividualCountry';


const FILTERABLE_CAPITALS = [
  'Madrid',
  'London',
  'Lisbon',
  'Athens',
  'Rome',
  'Berlin',
  'Copenhagen',
  'Reykjavik',
  'Stockholm',
  'Oslo',
  'Helsinki',
  'Tallinn',
  'Sofia',
  'Istanbul',
  'Zagreb',
  'Tirana',
  'Warsaw',
  'Prague',
  'Moscow',
  'Paris',
  'Amsterdam',
  'Zurich',
  'Vienna',
  'Ljubljana',
  'Podgorica',
  'Vatican City',

]


export default function Countries() {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCapital, setSelectedCapital] = useState('');

  useEffect(() => {
    async function fetchData() {
      // if (selectedCapital) {
      //   const data = await fetch(`https://restcountries.com/v3.1/capital/${selectedCapital}`);
      //   const result = await data.json();
      //   setSelectedCapital(result);
      //   return;
      // }
      try {
        // const response = await fetch('https://restcountries.com/v3.1/all');
        const response = await fetch(
          selectedCapital
            ? `https://restcountries.com/v3.1/capital/${selectedCapital}`
            : 'https://restcountries.com/v3.1/all'
        );
        if (!response) {
          throw new Error('failed to fetch a response')
        }
        const data = await response.json();
        setCountries(data); // Set the entire array of country objects
        setIsLoading(false);
        // console.log(countries)
      } catch (e) {
        console.error('error fetching data', e);
        setIsLoading(true);
      }
    }
    fetchData();
  }, [selectedCapital]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function handleChange(option) {
    // const fetchData = async () => {
    //   const response = await fetch(`https://restcountries.com/v3.1/capital/${value}`);
    //   const data = await response.json();
    //   setSelectedCapital(data);
    // }
    // fetchData();
    setSelectedCapital(option.value);
  }

  const capitalOptions = FILTERABLE_CAPITALS.map((capital) => ({
    value: capital,
    label: capital,
  }));

  return (
    <>
      <div>
        <Select
          placeholder="select a capital"
          onChange={handleChange}
          options={capitalOptions}>
        </Select>
      </div>
      {countries && countries.length > 0 ? ( //  to check if countries is defined and has a length greater than 0 before rendering the list of countries. 
        countries.map((country) => (
          <div key={country.cca3}>
            <IndividualCountry>
              Country: {country.name?.common}
            </IndividualCountry>
            <IndividualCountry>
              capital: {country.capital}
            </IndividualCountry>
        </div>
        ))
      ) : (
          <div>
            is Loading...
          </div>
      )
    }
    </>
  )
}