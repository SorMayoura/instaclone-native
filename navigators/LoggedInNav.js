import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
                tabBarStyle: {
                    borderTopColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "black",
                }
            }}
        >
            <Tabs.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused, color}) => (
                        <TabIcon focused={focused} color={color} iconName={"home"} />
                    )

                }} />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon focused={focused} color={color} iconName={"search"} />
                    )
                }} />

<Tabs.Screen
                name="Camera"
                component={View}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon focused={focused} color={color} iconName={"camera"} />
                    )
                }} />
            <Tabs.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused, color}) => (
                        <TabIcon focused={focused} color={color} iconName={"heart"} />
                    )
                }} />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon focused={focused} color={color} iconName={"person"} />
                    )
                }} />
        </Tabs.Navigator>
    )
}