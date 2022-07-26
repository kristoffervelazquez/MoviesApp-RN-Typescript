import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/navigation/Navigation';
import LanguageContext from './src/context/LanguageContext';
import { GradientProvider } from './src/context/GradientContext';




const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigation />
            </AppState>
        </NavigationContainer>
    )
}


const AppState = ({ children }: any) => {
    return (
        <LanguageContext>
            <GradientProvider>
                {children}
            </GradientProvider>
        </LanguageContext>
    )
}



export default App
