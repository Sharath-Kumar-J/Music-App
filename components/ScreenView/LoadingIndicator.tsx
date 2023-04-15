import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import stylesmain from '../Stylesheets/Mainstyle'

const LoadingIndicatator = () => {
    return (

        <View style={stylesmain.loadingIndicator}>
            <ActivityIndicator size='large' color="#000000" />
        </View>
    )
}

export default LoadingIndicatator;