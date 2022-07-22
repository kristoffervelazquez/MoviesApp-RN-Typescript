import React, { useContext } from 'react'
import { View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../../components/HorizontalSlider';
import useTvShows from '../../hooks/useTvShows';
import TvShowPoster from '../../components/TvShowPoster';
import { languageContext } from '../../context/LanguageContext';


const { width: windowWidth } = Dimensions.get('window')

const TvHomeScreen = () => {
    const {idioma} = useContext(languageContext)

    const { top } = useSafeAreaInsets()

    const { isLoading, popular, onTheAir, onAirToday, topRated } = useTvShows(idioma)


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
    }

    return (

        <ScrollView>

            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }} >
                    <Carousel
                        // Just one of the many styles from the Carousel module
                        mode="parallax"

                        // This style prop regards to the carousel container not to the item itself
                        style={{ width: windowWidth, justifyContent: 'center' }}

                        // Paging in false allows to do superfast scroll
                        pagingEnabled={false}
                        // and that superfast scroll stops on multiples of windowSize
                        windowSize={2}
                        // the snap helps to stop exactly in 1 item, no in the middle of two or so
                        snapEnabled



                        // This props are for the item in the middle
                        width={300}
                        height={440}

                        modeConfig={{
                            // How the "main" item will look
                            parallaxScrollingScale: 0.9,
                            // How separate the adjacent items will be
                            parallaxScrollingOffset: 40,
                            // How big the adjacent items will look compared to the "main" item
                            parallaxAdjacentItemScale: 0.75,
                        }}

                        data={popular}
                        renderItem={({ item }) => <TvShowPoster show={item} />}
                    />
                </View>
                <HorizontalSlider
                    data={onTheAir}
                    renderItem={({ item }) => <TvShowPoster show={item} height={200} width={140} />}
                    title='Al aire'
                />
                <HorizontalSlider
                    data={topRated}
                    renderItem={({ item }) => <TvShowPoster show={item} height={200} width={140} />}
                    title='Mejor Calificados'
                />
                <HorizontalSlider
                    data={onAirToday}
                    renderItem={({ item }) => <TvShowPoster show={item} height={200} width={140} />}
                    title='En Vivo Hoy!'
                />


                {/* <HorizontalSlider
                    data={topRated}
                    renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                    title='Mejor valoradas'
                />
                <HorizontalSlider
                    data={upcoming}
                    renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                    title='Proximamente...'
                /> */}

            </View>
        </ScrollView>
    )


}

export default TvHomeScreen