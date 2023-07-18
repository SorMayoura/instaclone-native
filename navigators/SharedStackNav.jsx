import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Me from "../screens/Me";
import Profile from "../screens/Profile";
import Photo from "../screens/Photo";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function SharedStackNav({screenName}) {
    return(
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: false,
                headerTintColor: "white",
                headerStyle: {
                    borderBottomColor: "rbga(255, 255, 255, 0.3)",
                    shadowColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "black"
                }
            }}>
                
            {screenName === "Feed" ? (
                <Stack.Screen 
                name={"Feed"} 
                component={Feed}
                options={{
                    headerTitle: () => (
                        <Image style={{
                            width: 120,
                            height: 40
                        }}
                        resizeMode="contain"
                        source={require("../assets/logo.png")} />
                    )
                }} /> ) : null 
            }
            {screenName === "Search" ? (
                <Stack.Screen name={"Search"} component={Search} /> ) : null 
            }
            {screenName === "Notifications" ? (
                <Stack.Screen name={"Notifications"} component={Notifications} /> ) : null 
            }
            {screenName === "Me" ? (
                <Stack.Screen name={"Me"} component={Me} /> ) : null 
            }
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Photo" component={Photo} />
        </Stack.Navigator>
    )
}