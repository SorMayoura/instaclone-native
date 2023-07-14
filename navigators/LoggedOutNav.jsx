import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/createAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerBackTitleVisible:false,
                headerTitle: false,
                headerTransparent: true,  // same as: headerShown: false 
                headerTintColor: "white",
            }}>

            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    )
}