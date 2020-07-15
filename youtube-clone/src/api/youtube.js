import axios from 'axios';

// this create function will make us do the get request easy later on.
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : 'AIzaSyDwtw8eSkhwl3rx6_iEgOw4qW3VjJO2MCM'
    }
});