import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const create = async ()=>{
    console.log(post);
    const res = await axios.post(API_URL);
    return res.data 

 };


const postsService = {
    create
};

export default postsService;