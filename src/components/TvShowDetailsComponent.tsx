import { View, Text, FlatList } from 'react-native'
import React from 'react'
import 'intl';
import 'intl/locale-data/jsonp/en';
import Icon from 'react-native-vector-icons/Ionicons'
import CastCardItem from './CastCardItem';
import { TvShowDetails } from '../interfaces/TvShowsInterfaces/tvShowDetailsInterface';
import { CastTV } from '../interfaces/TvShowsInterfaces/tvShowCreditsInterface';


interface Props {
    show: TvShowDetails;
    cast: CastTV[]
}


const TvShowDetailsComponent = ({ cast, show }: Props) => {
    return (
        // Detalles
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' size={16} style={{ marginRight: 4, }} />
                    <Text>{show.vote_average} - </Text>

                    <Text style={{ fontSize: 12, marginTop: 1, }}>
                        {show.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>

                {/* Historia */}

                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', }}>Historia</Text>
                    <Text style={{ fontSize: 16 }}>{show.overview}</Text>
                </View>

            </View>
            <View style={{ marginBottom: 30, }}>
                <Text style={{ marginLeft: 20, fontSize: 24, marginTop: 10, fontWeight: 'bold', }}>Actores</Text>

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

export default TvShowDetailsComponent