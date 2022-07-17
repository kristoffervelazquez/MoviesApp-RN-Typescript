import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetail';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const screenHeight = Dimensions.get('window').height

const DetailScreen = ({ route }: Props) => {

    const movie = route.params

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFullDetails } = useMovieDetails(movie.id)

    console.log(cast);




    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
                <Icon name='star-outline' size={20} color='gray' />
            </View>

        </ScrollView>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    posterImage: {
        flex: 1,
        resizeMode: 'stretch',
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
})