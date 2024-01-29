import axios from "axios";
const instance = axios.create({
    baseURL: 'restaurant-production-d53d.up.railway.app'
  });
export default instance