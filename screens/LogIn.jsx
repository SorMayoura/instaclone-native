import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { AuthButton } from "../components/auth/AuthButton";
import { useForm } from "react-hook-form";

export default function LogIn({navigation}) {
    const { setValue, handleSubmit, register } = useForm();
    const passwordRef = useRef();

    function onNext(nextOne) {
        nextOne?.current?.focus();
    }

    function onValid(data) {
        console.log('valid', data);
    }

    useEffect(() => {
        register("userName");
        register("password");
    }, [register]);

    return (
        <AuthLayout>
            <TextInput
                placeholder="Username"
                returnKeyType="next"
                autoCapitalize="none"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={onNext(passwordRef)}                
                onChangeText={(text) => {setValue("userName", text)}}/>
            <TextInput 
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => {setValue("password", text)}} />
            <AuthButton 
                text={"Log In"}
                disabled={false}
                onPress={handleSubmit(onValid)} 
            />
        </AuthLayout>
    )
}