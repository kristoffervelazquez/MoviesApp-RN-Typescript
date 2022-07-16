import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies';




const HomeScreen = () => {

    const { moviesCine, isLoading } = useMovies()


    // console.log(moviesCine[1]?.title);

    if (true) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
    }

    return (
        <View>
            <Text>Hola</Text>
        </View>
    )
}

export default HomeScreen