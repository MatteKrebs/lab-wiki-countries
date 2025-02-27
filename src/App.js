import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      const data = response.data;
      setCountries(data);
    };
    getCountries();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/" element={<p></p>} />
              <Route path="/:id" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
