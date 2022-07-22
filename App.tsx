import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/navigation/Navigation';
import LanguageContext from './src/context/LanguageContext';
import { useState } from 'react';




const App = () => {
    return (
        <NavigationContainer>
            <LanguageContext>
                <Navigation />
            </LanguageContext>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})