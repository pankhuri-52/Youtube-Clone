import axios from 'axios';

// this create function will make us do the get request easy later on.
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3'
});