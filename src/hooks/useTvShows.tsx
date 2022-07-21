import { useState, useEffect } from 'react';
import { Lenguajes } from '../api/movieDB';
import showDB from '../api/showDB';
import { TvShow, TvResponse } from '../interfaces/TvShowsInterfaces/TvShowInterface';


interface TvShowsState {
    isLoading: boolean
    popular: TvShow[]
    onTheAir: TvShow[],
    onAirToday: TvShow[],
    topRated: TvShow[]

}

const useTvShows = (idioma: Lenguajes = 'en-EN') => {


    const [tvShowsState, setTvShowsState] = useState<TvShowsState>({
        isLoading: true,
        onTheAir: [],
        popular: [],
        onAirToday: [],
        topRated: [],
    })


    const getTvShows = async () => {
        const popularTvShows = await showDB(idioma).get<TvResponse>('/popular')
        const onTheAirTvShows = await showDB(idioma).get<TvResponse>('/on_the_air')
        const onAirTodaySTvhows = await showDB(idioma).get<TvResponse>('/airing_today')
        const topRatedTvShows = await showDB(idioma).get<TvResponse>('/top_rated')



        try {
            const response = await Promise.all([popularTvShows, onTheAirTvShows, onAirTodaySTvhows, topRatedTvShows]);

            setTvShowsState({
                isLoading: false,
                popular: response[0].data.results,
                onTheAir: response[1].data.results,
                onAirToday: response[2].data.results,
                topRated: response[3].data.results
            })
        } catch (error) {
            console.log(error);
        }



    }


    useEffect(() => {
        getTvShows();
    }, [])

    return {
        ...tvShowsState
    }
}

export default useTvShows