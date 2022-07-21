import { MovieFull } from '../interfaces/MoviesInterfaces/movieDetailsInterface';
import { useEffect, useState } from 'react';
import movieDB, { Lenguajes } from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/MoviesInterfaces/creditsInterface';
import { SimilarMoviesResponse, SimilarMovies } from '../interfaces/MoviesInterfaces/moviesSimilarInterface';


interface MovieDetailsProps {
    isLoading: boolean,
    movieFullDetails?: MovieFull,
    cast: Cast[],
    similar: SimilarMovies[]
}


interface Props {
    id: number,
    lenguaje?: Lenguajes
}

export const useMovieDetails = ({ id, lenguaje = 'en-EN' }: Props) => {

    const [movieDetailsState, setmovieDetailsState] = useState<MovieDetailsProps>({
        isLoading: true,
        movieFullDetails: undefined,
        cast: [],
        similar: []
    });


    const getDetails = async () => {
        const movieFullDetails = movieDB(lenguaje).get<MovieFull>(`/${id}`);
        const movieCredits = movieDB(lenguaje).get<CreditsResponse>(`/${id}/credits`);
        const movieSimilars = movieDB(lenguaje).get<SimilarMoviesResponse>(`/${id}/similar`);

        try {
            const resp = await Promise.all([movieFullDetails, movieCredits, movieSimilars]);
            setmovieDetailsState({
                isLoading: false,
                movieFullDetails: resp[0].data,
                cast: resp[1].data.cast,
                similar: resp[2].data.results
            });
        } catch (error) {
            console.log(error);
        }


    }


    useEffect(() => {
        getDetails();
    }, [id])


    return {
        ...movieDetailsState
    }
}