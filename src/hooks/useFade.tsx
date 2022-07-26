import { useRef } from 'react'
import { Animated } from 'react-native'


export const useFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        })
    }


    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        });
    }

    return { fadeIn, fadeOut, opacity }

}
