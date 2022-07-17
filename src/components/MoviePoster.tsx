import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number
    width?: number

}


const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <View style={{
            width,
            height,
            marginHorizontal: 5
        }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 12,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 13,
    }
})

export default MoviePoster

