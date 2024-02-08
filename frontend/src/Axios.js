import axios from "axios";
const instance = axios.create({
    baseURL: 'https://restaurant-production-3c6a.up.railway.app'
  });
export default instance