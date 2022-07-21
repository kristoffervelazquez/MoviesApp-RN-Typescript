import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'


const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Settings Screen</Text>

            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center', marginTop: 10 }}>Idioma:</Text>
            <View style={styles.languageContainer}>
                <View style={styles.languageContainer} >
                    <Text style={styles.textoIdioma}>English</Text>
                    <RadioButton value='es-ES' />
                </View>
                <View style={styles.languageContainer}>
                    <Text style={styles.textoIdioma}>Español</Text>
                    <RadioButton value='es-ES' />
                </View>
            </View>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    languageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titulo: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
    },
    textoIdioma: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    },
    selectionContainer: {

    }
})