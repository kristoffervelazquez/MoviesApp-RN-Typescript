import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MoiveDBNowPlaying, Movie } from '../interfaces/movieInterface';



export const useMovies = () => {

    const [moviesCine, setMoviesCine] = useState<Movie[]>([])
    const [isLoading, setisLoading] = useState(true)

    const getMovies = async () => {
        const resp = await movieDB.get<MoiveDBNowPlaying>('/now_playing')

        setMoviesCine(resp.data.results)
    }
    useEffect(() => {
        //nowPlaying
        getMovies();

        setisLoading(false)

    }, [])


    return {
        moviesCine,
        isLoading
    }

}