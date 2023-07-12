import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function LogIn({navigation}) {
    return (
        <View>
            <Text>LogIn</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>
                        Go to Create Account
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}