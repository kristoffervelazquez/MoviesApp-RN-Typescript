import axios from "axios";
import { Lenguajes } from './movieDB';


const showDB = (lenguaje: Lenguajes) => axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv',
    params: {
        api_key: '9bdf97ea633c9fe74d9fcd02679e5db1',
        language: lenguaje,
    },
});


export default showDB;