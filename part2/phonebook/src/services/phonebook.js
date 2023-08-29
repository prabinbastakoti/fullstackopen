import axios from "axios";

const baseURL = "/api/persons";

const getAll = () => {
  return axios.get(baseURL).then((response) => response.data);
};

const create = (newObj) => {
  return axios.post(baseURL, newObj).then((response) => response.data);
};

const removePhone = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const update = (id, changedNote) => {
  return axios
    .put(`${baseURL}/${id}`, changedNote)
    .then((response) => response.data);
};

export default { getAll, create, removePhone, update };
