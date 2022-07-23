import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/Movies/DetailScreen';
import { Movie } from '../interfaces/MoviesInterfaces/movieInterface';
import BottomTabNavigation from './BottomTabNavigation';
import { TvShow } from '../interfaces/TvShowsInterfaces/TvShowInterface';
import TvDetailScreen from '../screens/TvShows/TvDetailScreen';
import { useColorScheme } from 'react-native';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie
    TvDetailScreen: TvShow
}




const Stack = createStackNavigator<RootStackParams>();



export const Navigation = () => {
    const theme = useColorScheme()


    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: theme === 'dark' ? 'black' : 'white'
            }

        }}>
            <Stack.Screen name="HomeScreen" component={BottomTabNavigation} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name='TvDetailScreen' component={TvDetailScreen} />
        </Stack.Navigator>
    );
}