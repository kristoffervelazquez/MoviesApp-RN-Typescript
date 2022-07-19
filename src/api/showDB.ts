import axios from "axios";


const showDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv',
    params: {
        api_key: '9bdf97ea633c9fe74d9fcd02679e5db1',
        language: 'en-EN',
    },
});


export default showDB;