import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const getPosts = async ()=>{
   const token = localStorage.getItem("token")
    const res = await axios.get(API_URL,{
      headers:{
         Authorization:token
      }
    });
    return res.data ;
 };

 const getPostById = async (_id) => {
    const res = await axios.get(API_URL + "/id" + _id);
    return res.data;
 };

const postsService = {
    getPosts,
    getPostById
};

export default postsService;