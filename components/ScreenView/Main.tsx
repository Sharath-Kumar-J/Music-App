import { TouchableOpacity, FlatList, Text, ActivityIndicator, View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import stylesmain from '../Stylesheets/Mainstyle'
import { Interdata } from '../Interfaces/Interface'
import { types } from '../Types/Types'
import LoadingIndicatator from './LoadingIndicator'



const Main = ({ navigation } ) => {
    const dispatch = useDispatch();
    const data = useSelector(( state: Interdata) => state.data);
    const loading = useSelector(( state: Interdata) => state.loading);
    const error = useSelector(( state: Interdata) => state.error);

    useEffect(() => {
        dispatch({ type:types.GET_DATA })
    }, [])

    if (loading) {
        return (
          <LoadingIndicatator/>
        )
    }
    if (error) {
        console.log(error)
    }

    const renderItem = ({ item }) => {
        return (

            <View style={stylesmain.container}>
                <View style={stylesmain.touchableopacity}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            dispatch({ type:types.STORED_DATA, payload: item })
                            navigation.navigate(" Details ")
                        }}
                    >
                        <Text style={stylesmain.artistname}>
                            {item.artistName}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={data?.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default Main;