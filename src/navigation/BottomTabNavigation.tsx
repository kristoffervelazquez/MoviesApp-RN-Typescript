
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/Movies/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TvHomeScreen from '../screens/TvShows/TvHomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabNavigation = () => {

    const BottomTab = createMaterialBottomTabNavigator();

    return (

        <BottomTab.Navigator barStyle={{ backgroundColor: '#170F5F' }}>
            <BottomTab.Screen name="MoviesNavigator" options={{ tabBarLabel: 'Movies', tabBarIcon: ({ color, focused }) => (<Icon name={(focused ? 'film' : 'film-outline')} color={color} size={20} />) }} component={HomeScreen} />
            <BottomTab.Screen name="ShowsNavigator" options={{ tabBarLabel: 'TV Shows', tabBarIcon: ({ color, focused }) => (<Icon name={(focused ? 'tv' : 'tv-outline')} color={color} size={20} />) }} component={TvHomeScreen} />
            <BottomTab.Screen name="SettingsScreen" options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color, focused }) => (<Icon name={(focused ? 'settings' : 'settings-outline')} color={color} size={20} />) }} component={SettingsScreen} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigation