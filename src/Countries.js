import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import fetchData from "./fetchData";
import Footer from "./Components/Footer";
import CountryData from "./Components/CountryData";
import Pagination from "./Components/Pagination";

const url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
const flagsUrl = "https://restcountries.eu/rest/v2/all?fields=flag;alpha2Code";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [flags, setFlags] = useState([]);
  const [loading, setLoading] = useState(true);
  //ADDING PAGGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);

  useEffect(() => {
    fetchData(url, setCountriesData, "locations");
    fetchData(flagsUrl, setFlags);
    setLoading(false);
  }, []);
  //PAGINATION VARIABLES
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = countriesData.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Navbar />
      <section className="countries-section">
        <table>
          <thead>
            <tr>
              <th aria-colspan="1">Flag</th>
              <th aria-colspan="1">Country Name/Province</th>
              <th aria-colspan="1">Population</th>
              <th aria-colspan="1">Cases confirmed</th>
              <th aria-colspan="1">Deaths</th>
              <th aria-colspan="1">Recovered</th>
              <th aria-colspan="1">Last Updated YYYY/MM/DD</th>
            </tr>
          </thead>
          <CountryData countriesData={currentCountries} flags={flags} />
          <td colSpan="7" className="countries-table-footer">
            <Pagination
              countriesPerPage={countriesPerPage}
              countriesData={countriesData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </td>
        </table>
        <Footer />
      </section>
    </>
  );
};

export default Countries;
