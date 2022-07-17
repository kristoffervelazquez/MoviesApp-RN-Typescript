import { MovieFull } from '../interfaces/movieDetailsInterface';
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';


interface MovieDetailsProps {
    isLoading: boolean,
    movieFullDetails?: MovieFull,
    cast: Cast[]
}


export const useMovieDetails = (id: number) => {

    const [movieDetailsState, setmovieDetailsState] = useState<MovieDetailsProps>({
        isLoading: true,
        movieFullDetails: undefined,
        cast: []
    });


    const getDetails = async () => {
        const movieFullDetails = movieDB.get<MovieFull>(`/${id}`);
        const movieCredits = movieDB.get<CreditsResponse>(`/${id}/credits`);


        const resp = await Promise.all([movieFullDetails, movieCredits])



        setmovieDetailsState({
            isLoading: false,
            movieFullDetails: resp[0].data,
            cast: resp[1].data.cast
        })

    }


    useEffect(() => {
        getDetails();
    }, [])


    return {
        ...movieDetailsState
    }
}