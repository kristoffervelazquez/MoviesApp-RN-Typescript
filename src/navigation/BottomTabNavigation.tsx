
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/Movies/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TvHomeScreen from '../screens/TvShows/TvHomeScreen';

const BottomTabNavigation = () => {

    const BottomTab = createMaterialBottomTabNavigator();

    return (
        <BottomTab.Navigator barStyle={{ backgroundColor: '#170F5F' }}>
            <BottomTab.Screen name="MoviesNavigator" options={{ tabBarLabel: 'Movies', }} component={HomeScreen} />
            <BottomTab.Screen name="ShowsNavigator" options={{ tabBarLabel: 'Shows' }} component={TvHomeScreen} />
            <BottomTab.Screen name="SettingsScreen" options={{ tabBarLabel: 'Settings' }} component={SettingsScreen} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigation