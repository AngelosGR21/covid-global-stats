import React from "react";

const CountryData = ({ countriesData, flags }) => {
  return (
    <tbody>
      {countriesData.map((country, indx) => {
        let cFlag = flags.filter((c) => c.alpha2Code === country.country_code);
        return (
          <tr key={indx}>
            <td className="image-cell">
              {cFlag[0] === undefined ? (
                "----"
              ) : (
                <img
                  className="countries-img"
                  alt={country.country}
                  src={cFlag[0].flag}
                ></img>
              )}
            </td>
            <td>
              {country.country}
              {country.province ? `, ${country.province} ` : ""}
            </td>
            <td>
              {country.country_population
                ? country.country_population.toLocaleString()
                : "0"}
            </td>
            <td>{country.latest.confirmed.toLocaleString()}</td>
            <td>{country.latest.deaths.toLocaleString()}</td>
            <td>{country.latest.recovered.toLocaleString()}</td>
            <td>{country.last_updated.slice(0, 10)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CountryData;
