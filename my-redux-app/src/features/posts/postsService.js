import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const getPosts = async ()=>{
    console.log(post);
    const res = await axios.get(API_URL);
    return res.data 

 };

 const getPostById = async (_id) => {
    const res = await axios.get(API_URL + _id);
    return res.data;
 };

const postsService = {
    getPosts,
    getPostById
};

export default postsService;