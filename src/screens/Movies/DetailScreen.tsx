import React, { useContext } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovieDetails } from '../../hooks/useMovieDetail';
import MovieDetails from '../../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'
import HorizontalSlider from '../../components/HorizontalSlider';
import MoviePoster from '../../components/MoviePoster';
import { languageContext } from '../../context/LanguageContext';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const screenHeight = Dimensions.get('window').height

const DetailScreen = ({ route, navigation }: Props) => {

    const { idioma } = useContext(languageContext)

    const movie = route.params

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFullDetails, similar } = useMovieDetails({ id: movie.id, lenguaje: idioma })




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
                {/* <Icon name='star-outline' size={20} color='gray' /> */}
            </View>

            {
                isLoading ?
                    <ActivityIndicator color={'grey'} style={{ marginTop: 20 }} />
                    :
                    <MovieDetails movie={movieFullDetails!} cast={cast} />

            }

            <HorizontalSlider
                data={similar}
                renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                title='Similares a este...'
            />
            {/* Boton para regresar */}
            <TouchableOpacity style={styles.backButtonContainer} onPress={() => { navigation.pop() }}>
                <Icon name='arrow-back-outline' color="black" size={25} style={styles.backButton} />
            </TouchableOpacity>

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
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    backButtonContainer: {
        position: 'absolute',
        zIndex: 999,
        top: 30,
        left: 10,
        elevation: 9,


    }
})