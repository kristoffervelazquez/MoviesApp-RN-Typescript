import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TvShow } from '../interfaces/TvShowsInterfaces/TvShowInterface';
import { StackActions } from '@react-navigation/native';



interface Props {
    show: TvShow;
    height?: number
    width?: number

}


const TvShowPoster = ({ show, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation();
    const pushAction = StackActions.push('TvDetailScreen' as never, show as never);

    const uri = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
    return (

        <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.dispatch(pushAction) }}>
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

export default TvShowPoster

