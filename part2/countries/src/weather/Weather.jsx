import axios from "axios";
import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_SOME_KEY;

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);

  const baseurl = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;

  useEffect(() => {
    axios.get(baseurl).then((response) => setWeather(response.data));
  }, []);

  if (weather) {
    const {
      current: {
        temp_c: currentTemp,
        wind_mph: currentWind,
        condition: { text: currentText, icon: currentIcon },
      },
    } = weather;
    return (
      weather && (
        <>
          <h1>Weather in {weather.location.name}</h1>
          <p>temperature {currentTemp} celsius</p>
          <img src={currentIcon} alt={currentText} />
          <p>wind {currentWind} mph</p>
        </>
      )
    );
  }
};
export default Weather;
