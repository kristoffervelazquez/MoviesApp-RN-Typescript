import React, { useContext, useEffect } from 'react'
import { View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import MoviePoster from '../../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../../components/HorizontalSlider';
import { languageContext } from '../../context/LanguageContext';
import GradientBackground from '../../components/GradientBackground';
import { getImageColors } from '../../helpers/getColors';
import { GradientContext } from '../../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { idioma } = useContext(languageContext)
    const { setMainColors } = useContext(GradientContext)
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies(idioma)





    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying]);


    const getPosterColors = async (index: number = 0) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

        setMainColors({ primary, secondary });
    }

    return (
        isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
            :
            < GradientBackground >
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
                                onSnapToItem={index => getPosterColors(index)}


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

                                data={nowPlaying}
                                renderItem={({ item }) => <MoviePoster movie={item} />}
                            />
                        </View>
                        <HorizontalSlider
                            data={nowPlaying}
                            renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                            title='En cine'
                        />
                        <HorizontalSlider
                            data={popular}
                            renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                            title='Populares'
                        />
                        <HorizontalSlider
                            data={topRated}
                            renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                            title='Mejor valoradas'
                        />
                        <HorizontalSlider
                            data={upcoming}
                            renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                            title='Proximamente...'
                        />

                    </View>
                </ScrollView>
            </GradientBackground >

    )


}

export default HomeScreen