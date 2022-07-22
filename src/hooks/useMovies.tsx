import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MoviesResponse, Movie } from '../interfaces/MoviesInterfaces/movieInterface';
import { Lenguajes } from '../api/movieDB';


interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

export const useMovies = (idioma: Lenguajes) => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })
    // const [moviePopulares, setMoviePouplares] = useState<Movie[]>([])

    const [isLoading, setisLoading] = useState(true)

    const getMovies = async () => {

        const nowPlaying = movieDB(idioma).get<MoviesResponse>('/now_playing')
        const popular = movieDB(idioma).get<MoviesResponse>('/popular')
        const topRated = movieDB(idioma).get<MoviesResponse>('/top_rated')
        const upcoming = movieDB(idioma).get<MoviesResponse>('/upcoming')

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
    }, [idioma])


    return {
        ...moviesState,
        isLoading
    }

}