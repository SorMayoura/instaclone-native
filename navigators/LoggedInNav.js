import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';
import StackNavFactory from '../components/nav/StackNavFactory';
import Me from '../screens/Me';

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
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon focused={focused} color={color} iconName={"home"} />
                    )

                }}>
                {() => <StackNavFactory screenName="Feed" />}
            </Tabs.Screen>

            <Tabs.Screen
                name="Search"                
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon focused={focused} color={color} iconName={"search"} />
                    )
                }}>
                    { () => <StackNavFactory screenName="Search" /> }
                </Tabs.Screen>

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
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon focused={focused} color={color} iconName={"heart"} />
                    )
                }}>
                    { () => <StackNavFactory screenName="Notifications" /> }
                </Tabs.Screen>

            <Tabs.Screen
                name="Me"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon focused={focused} color={color} iconName={"person"} />
                    )
                }}>
                    {() => <StackNavFactory screenName="Me" />}
                </Tabs.Screen>
        </Tabs.Navigator>
    )
}