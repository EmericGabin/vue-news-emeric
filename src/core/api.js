import axios from "axios";

export const getArticles = async (limit = 10, page = 0) =>{
    
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&page=${page}`)
    //console.log(res.data)
    return {...res.data}
}

export const getArticleById = async (id) =>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //console.log(res.data)
    return res.data
}
