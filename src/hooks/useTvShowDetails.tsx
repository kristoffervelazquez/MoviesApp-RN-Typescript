
import showDB from '../api/showDB';
import { useState, useEffect } from 'react';
import { TvShowDetails } from '../interfaces/TvShowsInterfaces/tvShowDetailsInterface';
import { CastTV, CreditsResponseTV } from '../interfaces/TvShowsInterfaces/tvShowCreditsInterface';
import { TvSimilarShows, TvSimilarShowsResponse } from '../interfaces/TvShowsInterfaces/tvShowSimilarInterface';
import { Lenguajes } from '../api/movieDB';



interface TvShowDetailsState {
    tvShowDetails?: TvShowDetails;
    isLoading: boolean;
    cast: CastTV[],
    similarShows: TvSimilarShows[]
}


interface Props {
    id: number,
    idioma: Lenguajes
}

const useTvShowDetails = ({ id, idioma }: Props) => {


    const [state, setState] = useState<TvShowDetailsState>({
        cast: [],
        isLoading: true,
        tvShowDetails: undefined,
        similarShows: []
    });

    const getDetails = async () => {
        const showDetails = showDB(idioma).get<TvShowDetails>(`/${id}`)
        const cast = showDB(idioma).get<CreditsResponseTV>(`/${id}/credits`)
        const similarTvShows = await showDB(idioma).get<TvSimilarShowsResponse>(`/${id}/similar`)

        const response = await Promise.all([showDetails, cast, similarTvShows]);

        setState({
            isLoading: false,
            tvShowDetails: response[0].data,
            cast: response[1].data.cast,
            similarShows: response[2].data.results
        })
    }

    useEffect(() => {
        getDetails();
    }, [idioma])



    return {
        ...state
    }
}

export default useTvShowDetails