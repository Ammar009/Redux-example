import {FETCH_POSTS, NEW_POSTS} from './Type';
import axios from 'axios';

export const fetchposts = () => dispatch =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then((posts) =>{
        dispatch ({
            type: FETCH_POSTS,
            payload: posts
        })
    }).catch((err)=>{
        console.log(err);
    })
}