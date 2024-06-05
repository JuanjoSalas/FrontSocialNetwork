import axios from "axios";

const API_URL = "http://localhost:3001/users";

const register = async (userData) => {
    console.log(userData);
const res = await axios.post(API_URL , userData);
  return res.data;
};

const getUserByUserName = async (username)=>{
    const res = await axios.get(API_URL + "/name/"+ username)
    return res.data
}
const login = async(userData)=>{
  const res = await axios.post(API_URL + "/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);
  }
  return res.data
}
const getUserById = async (id)=>{
    const res = await axios.get(API_URL + "/id/"+ id)
    return res.data
}

const authService = {
  register,
  getUserByUserName,
  getUserById,
  login
};

export default authService;