import { ActivityIndicator } from "react-native";
import { View } from "react-native";

export const ScreenLayout = ({ loading, children }) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </View>
  );
};
