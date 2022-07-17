import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';


interface Props {
    title?: string;
    data: Movie[];
    renderItem: ({ item }: any) => JSX.Element

}


const HorizontalSlider = ({ data, title, renderItem }: Props) => {
    return (
        <View style={{ backgroundColor: 'white', height: (title ? 260 : 220) }}>
            {
                title &&
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{title}</Text>
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