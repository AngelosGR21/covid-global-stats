// IMPORTING DEPENDENCIES
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//IMPORTING  COMPONENTS
import Footer from "./Components/Footer";

// IMPORTING CSS FILE
import "./Home.css";

function Home() {
  //SETTING STATES
  const [generalData, setGeneralData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //FETCHING LATEST DATA
  const CovidData = async () => {
    try {
      const response = await axios.get(
        "https://coronavirus-tracker-api.herokuapp.com/v2/latest"
      );
      setGeneralData(response.data.latest);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    CovidData();
  }, []);

  // LOADING RETURN
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  // LOADED RETURN
  const { confirmed, deaths, recovered } = generalData;
  return (
    <>
      <section className="home-container">
        <h1 className="home-header">Global Live Stats</h1>
        <div className="home-statistics">
          <header className="home-headers">
            <h3 className="home-cases">
              Cases confirmed : {confirmed.toLocaleString()}
            </h3>
            <h3 className="home-recoveries">
              Total recovered : {recovered.toLocaleString()}
            </h3>
            <h3 className="home-deaths">
              Total deaths : {deaths.toLocaleString()}
            </h3>
          </header>
        </div>
        <Link className="home-link" to="/countries">
          View By Country
        </Link>
        <Footer />
      </section>
    </>
  );
}

export default Home;
