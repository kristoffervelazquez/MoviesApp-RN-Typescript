import { useState, useEffect } from 'react';
import showDB from '../api/showDB';
import { TvShow, TvResponse } from '../interfaces/TvShowsInterfaces/TvShowInterface';


interface TvShowsState {
    isLoading: boolean
    popular: TvShow[]
    onTheAir: TvShow[]

}

const useTvShows = () => {


    const [tvShowsState, setTvShowsState] = useState<TvShowsState>({
        isLoading: true,
        onTheAir: [],
        popular: []
    })


    const getTvShows = async () => {
        const popularTvShows = await showDB.get<TvResponse>('/popular')
        const onTheAirTvShows = await showDB.get<TvResponse>('/on_the_air')




        const response = await Promise.all([popularTvShows, onTheAirTvShows]);


        setTvShowsState({
            isLoading: false,
            popular: response[0].data.results,
            onTheAir: response[1].data.results
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