import { TouchableOpacity, FlatList, Text, ActivityIndicator, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

const Screenone = ({ navigation }) => {
    const dispatch = useDispatch();
    const value = useSelector(state => state);
    useEffect(() => {
        dispatch({ type: "Get_Data" })
    }, [])

    if (value.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color="#000000" />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (

            <View style={{ backgroundColor: "#ffffe0" }}>
                <View style={{ padding: 10, margin: 10, borderWidth: 1, borderRadius: 10, backgroundColor: "#ffe4c4" }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate(" Screentwo ", { Items: item }); }}
                    >
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '600', alignContent: 'space-around' }}>
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
                data={value.data?.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default Screenone;