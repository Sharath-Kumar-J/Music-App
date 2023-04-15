import { Text, View } from 'react-native'
import React from 'react'
import stylesdetails from '../Stylesheets/Detailstyle';
import { useSelector } from 'react-redux'
import { Interdata } from '../Interfaces/Interface';


const Details = () => {
  const Itemdetails = useSelector((state: Interdata) => state.stored_data)

  return (
    <View style={stylesdetails.container}>
      <View style={stylesdetails.details}>
        <View style={stylesdetails.artists}>

          <Text style={stylesdetails.artist} testID='mytext'>
            ArtistName:
          </Text>
          <Text style={stylesdetails.artistname} >
            {Itemdetails.artistName}
          </Text>

        </View>

        <View style={stylesdetails.tracks}>

          <Text style={stylesdetails.track} testID='mytrack'>
            TrackName:
          </Text>
          <Text style={stylesdetails.trackname} >
            {Itemdetails.artistName}
          </Text>

        </View>

        <View style={stylesdetails.collections}>
          <Text style={stylesdetails.collection} testID='mycollection'>
            CollectionName:
          </Text>
          <Text style={stylesdetails.collectionname}>
            {Itemdetails.collectionName}
          </Text>
        </View>

        <View style={stylesdetails.countrii}>
          <Text style={stylesdetails.countryy} testID='mycountry'>
            Country:
          </Text>
          <Text style={stylesdetails.country}>
            {Itemdetails.country}
          </Text>
        </View>

      </View>

    </View>
  )
}
export default Details;