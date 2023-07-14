import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { AuthButton } from "../components/auth/AuthButton";

export default function LogIn({navigation}) {
    return (
        <AuthLayout>
            <TextInput
                placeholder="Username"
                returnKeyType="next"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"} />
            <TextInput 
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"} />
            <AuthButton 
                text={"Log In"}
                disabled={true}
                // onPress={} 
            />
        </AuthLayout>
    )
}