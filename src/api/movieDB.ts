import axios from "axios";




const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9bdf97ea633c9fe74d9fcd02679e5db1',
        language: 'es-ES',
    },
});


export default movieDB;


