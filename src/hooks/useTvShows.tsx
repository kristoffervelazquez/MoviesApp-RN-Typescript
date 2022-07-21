import { useState, useEffect } from 'react';
import showDB from '../api/showDB';
import { TvShow, TvResponse } from '../interfaces/TvShowsInterfaces/TvShowInterface';


interface TvShowsState {
    isLoading: boolean
    popular: TvShow[]
    onTheAir: TvShow[],
    onAirToday: TvShow[],
    topRated: TvShow[]

}

const useTvShows = () => {


    const [tvShowsState, setTvShowsState] = useState<TvShowsState>({
        isLoading: true,
        onTheAir: [],
        popular: [],
        onAirToday: [],
        topRated: [],
    })


    const getTvShows = async () => {
        const popularTvShows = await showDB.get<TvResponse>('/popular')
        const onTheAirTvShows = await showDB.get<TvResponse>('/on_the_air')
        const onAirTodaySTvhows = await showDB.get<TvResponse>('/airing_today')
        const topRatedTvShows = await showDB.get<TvResponse>('/top_rated')



        const response = await Promise.all([popularTvShows, onTheAirTvShows, onAirTodaySTvhows, topRatedTvShows]);

        setTvShowsState({
            isLoading: false,
            popular: response[0].data.results,
            onTheAir: response[1].data.results,
            onAirToday: response[2].data.results,
            topRated: response[3].data.results
        })


    }


    useEffect(() => {
        getTvShows();
    }, [])

    return {
        ...tvShowsState
    }
}

export default useTvShows