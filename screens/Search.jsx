import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Search({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Photo")}>
            <Text style={{color:"white"}}>Photo</Text>
        </TouchableOpacity>
    </View>
  );
}
