import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseURL).then((response) => response.data);
};

const create = (newObj) => {
  return axios.post(baseURL, newObj).then((response) => response.data);
};

const removePhone = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

export default { getAll, create, removePhone };
