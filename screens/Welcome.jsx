import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../color";

const Container = styled.View`
    flex: 1;
    background-color  : black;
    align-items: center;
    justify-content: center;
    padding: 0px 40px;
`;

const Logo = styled.Image`
    max-width: 50%;
    height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 13px 10px;  // order 2Case (Top&Bottom Right&Left) 4case: (Top Right Bottom Left)
    margin-top: 20px;
    border-radius: 3px;
    width: 100%;
    opacity: ${(props) => props.disabled ? "0.5" : "1"};
`;

const CreateAccountText = styled.Text`
    background-color: ${colors.blue};
    color: white;
    font-weight: 600;
    text-align: center;
`;

const LoginLink = styled.Text`
    color: ${colors.blue};
    margin-top: 10px;
    font-weight: 600;
    margin-top: 20px; // same as : margin: 20px 0px 0px 0px;     
`;

export default function Welcome({navigation}) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <Container>
            <Logo resizeMode="cover" source={require('../assets/logo.png')} />
            
                <CreateAccount disabled={false} onPress={goToCreateAccount}>
                    <CreateAccountText>Create New Account</CreateAccountText>
                </CreateAccount>
            

            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>Log In</LoginLink>
            </TouchableOpacity>

        </Container>
    )
}