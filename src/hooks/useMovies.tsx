import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MoviesResponse, Movie } from '../interfaces/movieInterface';


interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}


export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })
    // const [moviePopulares, setMoviePouplares] = useState<Movie[]>([])

    const [isLoading, setisLoading] = useState(true)

    const getMovies = async () => {

        const nowPlaying = movieDB.get<MoviesResponse>('/now_playing')
        const popular = movieDB.get<MoviesResponse>('/popular')
        const topRated = movieDB.get<MoviesResponse>('/top_rated')
        const upcoming = movieDB.get<MoviesResponse>('/upcoming')

        const resp = await Promise.all([nowPlaying, popular, topRated, upcoming]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        })



        setisLoading(false)

    }
    useEffect(() => {
        //nowPlaying
        getMovies();
    }, [])


    return {
        ...moviesState,
        isLoading
    }

}