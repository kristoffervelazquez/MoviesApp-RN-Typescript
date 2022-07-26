import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Movie } from '../interfaces/MoviesInterfaces/movieInterface';
import { TvShow } from '../interfaces/TvShowsInterfaces/TvShowInterface';
import { TvSimilarShows } from '../interfaces/TvShowsInterfaces/tvShowSimilarInterface';
import { SimilarMovies } from '../interfaces/MoviesInterfaces/moviesSimilarInterface';


interface Props {
    title?: string;
    data: Data[];
    renderItem: ({ item }: any) => JSX.Element

}

type Data = TvShow | Movie | TvSimilarShows | SimilarMovies

const HorizontalSlider = ({ data, title, renderItem }: Props) => {
    return (
        <View style={{ height: (title ? 260 : 220) }}>
            {
                title &&
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>{title}</Text>
            }
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    )
}

export default HorizontalSlider