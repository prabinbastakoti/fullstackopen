import axios from "axios";

const baseurl = `https://studies.cs.helsinki.fi/restcountries/api/all`;

const getAll = () => axios.get(baseurl).then((Response) => Response.data);

const CountryData = (country) =>
  axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
    .then((response) => response.data);

export default { getAll, CountryData };
