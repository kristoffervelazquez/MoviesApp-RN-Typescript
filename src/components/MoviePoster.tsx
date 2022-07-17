import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number
    width?: number

}


const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation();

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (

        <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.navigate('DetailScreen' as never, movie as never) }}>
            <View style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri }} style={styles.image} />
                </View>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 12,
        resizeMode: 'stretch',
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
})

export default MoviePoster

