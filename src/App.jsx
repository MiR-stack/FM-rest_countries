import { useEffect, useState } from "react";
import Home from "./pages/homePage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Country from "./pages/country_details/countryDetails";

function App() {
  const [dark, setDark] = useState(false);
  const [country, setCountry] = useState({});

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/bangladesh?fields=name,population,flags,region,subregion,capital,tld,currencies,languages,borders`
      );
      setCountry(data.data[0]);
    })();
  }, []);

  async function handleCountry(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,population,flags,region,subregion,capital,tld,currencies,languages,borders`;

    const data = await (await axios.get(url)).data[0];
    setCountry(data);
  }

  function handleMode() {
    setDark(!dark);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dark={dark}
              handleMode={handleMode}
              handleCountry={handleCountry}
            />
          }
        />
        <Route
          path="/countryDetails"
          element={
            <Country
              country={country}
              dark={dark}
              handleMode={handleMode}
              handleCountry={handleCountry}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
