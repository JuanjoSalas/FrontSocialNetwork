import axios from "axios";

const API_URL = "http://localhost:3001/users";

const register = async (userData) => {
    console.log(userData);
const res = await axios.post(API_URL , userData);
  return res.data;
};

const getUserByUserName = async (username)=>{
    const res = await axios.get(API_URL + "/name", username)
    return res.data
}

const authService = {
  register,
  getUserByUserName
};

export default authService;