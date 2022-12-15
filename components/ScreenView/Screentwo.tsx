import { Text, View } from 'react-native'
import React from 'react'

const Screentwo = ({ route }) => {
  const { params } = route;
  const { Items } = params;

  return (
    <View style={{ flex: 1, backgroundColor: "#b0e0e6" }}>
      <View style={{ backgroundColor: "#faebd7", alignItems: 'center', borderWidth: 2, padding: 20, margin: 10, }}>
        <Text style={{ fontSize: 15, color: 'black' }}>ArtistName: {Items.artistName}</Text>
        <Text style={{ fontSize: 15, color: 'black' }}>TrackName: {Items.trackName}</Text>
        <Text style={{ fontSize: 15, color: 'black' }}>collectionName: {Items.collectionName}</Text>
        <Text style={{ fontSize: 15, color: 'black' }}>Country: {Items.country}</Text>
      </View>

    </View>
  )
}
export default Screentwo;