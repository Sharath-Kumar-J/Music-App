import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screenone from "../ScreenView/Screenone";
import Screentwo from "../ScreenView/Screentwo";

const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=" Screenone " component={Screenone} />
                <Stack.Screen name=" Screentwo " component={Screentwo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationScreen;