import { useState } from "react";
import { useEffect } from "react";
import countries from "./country/Countries";
import Form from "./component/Form";
import Details from "./component/Details";
import Weather from "./weather/Weather";

function App() {
  const [value, setValue] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (country) {
      countries
        .getAll()
        .then((response) =>
          setAllCountries(
            response.filter((item) =>
              item.name.common.toLowerCase().includes(country.toLowerCase())
            )
          )
        );
    }
  }, [country]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleShow = (item) => {
    setAllCountries([{ ...item }]);
    setValue("");
    setCountry(null);
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
      <Details
        length={allCountries.length}
        list={allCountries}
        show={handleShow}
      />
      {allCountries.length === 1 && (
        <Weather location={allCountries[0].capital} />
      )}
    </>
  );
}

export default App;
