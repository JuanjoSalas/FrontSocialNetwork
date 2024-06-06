import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const getPosts = async ()=>{
    console.log(post);
    const res = await axios.post(API_URL);
    return res.data 

 };


const postsService = {
    getPosts
};

export default postsService;