import { View } from "react-native";
import { Text } from "react-native";

export default function Me(){
    return (
        <View style={{
            backgroundColor: "black",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{color:"white"}}> Me </Text>
        </View>
    )
}