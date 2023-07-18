import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';
import SharedStackNav from './SharedStackNav';

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
                {() => <SharedStackNav screenName="Feed" />}
            </Tabs.Screen>

            <Tabs.Screen
                name="Search"                
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon focused={focused} color={color} iconName={"search"} />
                    )
                }}>
                    { () => <SharedStackNav screenName="Search" /> }
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
                    { () => <SharedStackNav screenName="Notifications" /> }
                </Tabs.Screen>

            <Tabs.Screen
                name="Me"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon focused={focused} color={color} iconName={"person"} />
                    )
                }}>
                    {() => <SharedStackNav screenName="Me" />}
                </Tabs.Screen>
        </Tabs.Navigator>
    )
}