import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../color";

const Container = styled.View`
    flex: 1;
    background-color  : black;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.Image`
    max-width: 50%;
    height: 100px;
`;

const CreateAccount = styled.View`
    background-color: ${colors.blue};
    padding: 7px 10px;  // order 2Case (Top&Bottom Right&Left) 4case: (Top Right Bottom Left)
    border-radius: 5px;
`;

const CreateAccountText = styled.Text`
    background-color: ${colors.blue};
    color: white;
    font-weight: 600;
`;

const LoginLink = styled.Text`
    color: ${colors.blue};
    margin-top: 10px;
    font-weight: 600;
`;

export default function Welcome({navigation}) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <Container>
            <Logo resizeMode="contain" source={require('../assets/logo.png')} />
            <TouchableOpacity onPress={goToCreateAccount}>
                <CreateAccount>
                    <CreateAccountText>Create Account</CreateAccountText>
                </CreateAccount>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>Log in</LoginLink>
            </TouchableOpacity>

        </Container>
    )
}