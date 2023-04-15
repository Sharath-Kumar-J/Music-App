import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../ScreenView/Main";
import Details from "../ScreenView/Details";

const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=" Main " component={Main} />
                <Stack.Screen name=" Details " component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationScreen;