import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const getPosts = async ()=>{
   const token = localStorage.getItem("token")
    const res = await axios.get(API_URL,{
      headers:{
         Authorization:token
      }
    });
    console.log(res.data);
    return res.data;
 };

 const getPostById = async (_id) => {
    const token = localStorage.getItem("token")
    const res = await axios.get(API_URL + "/id/" + _id,{
      headers:{
         Authorization:token
      }
   });
    console.log(res.data);
    return res.data;
 };

 const createPost = async (postDat) => {
   const token = localStorage.getItem("token");
   console.log(postData);
   const res = await axios.post(API_URL, postData, {
       headers: {
           Authorization: token,
       }
   });
   console.log(res.data);
   return res.data;
};


const postsService = {
    getPosts,
    getPostById,
    createPost,
};

export default postsService;