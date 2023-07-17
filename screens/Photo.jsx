import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default Photo = ({navigation}) => {
    return (
        <View style={{
            backgroundColor: "black",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={{color:"white"}}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}