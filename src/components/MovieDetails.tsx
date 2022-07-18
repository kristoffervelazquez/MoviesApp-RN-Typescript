import { View, Text, FlatList } from 'react-native'
import React from 'react'
import 'intl';
import 'intl/locale-data/jsonp/en';
import { MovieFull } from '../interfaces/movieDetailsInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import CastCardItem from './CastCardItem';



interface Props {
    movie: MovieFull;
    cast: Cast[]
}


const MovieDetails = ({ cast, movie }: Props) => {
    return (
        // Detalles
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' size={16} style={{ marginRight: 4, color: 'black' }} />
                    <Text style={{ color: 'black' }}>{movie.vote_average} - </Text>

                    <Text style={{ fontSize: 12, marginTop: 1, color: 'black' }}>
                        {movie.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>

                {/* Historia */}

                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black' }}>Historia</Text>
                    <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black' }}>Presupuesto</Text>
                    <Text style={{ fontSize: 16 }}>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(movie.budget)}</Text>
                </View>

            </View>
            <View style={{ marginBottom: 100, }}>
                <Text style={{ marginLeft: 20, fontSize: 24, marginTop: 10, fontWeight: 'bold', color: 'black' }}>Actores</Text>

                <FlatList
                    data={cast}
                    renderItem={({ item }) => <CastCardItem actor={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>

        </>
    )
}

export default MovieDetails