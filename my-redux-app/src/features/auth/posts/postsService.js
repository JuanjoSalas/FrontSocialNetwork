import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const create = async (post)=>{
    console.log(post);
    const res = await axios.post(API_URL,post);
    return res.data 

 };


const authService = {
    create
};

export default authService