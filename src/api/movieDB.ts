import axios from "axios";


export type Lenguajes = 'en-EN' | 'es-ES'

const movieDB = (lenguaje: Lenguajes ) => axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9bdf97ea633c9fe74d9fcd02679e5db1',
        language: lenguaje,
    },
});


export default movieDB;


