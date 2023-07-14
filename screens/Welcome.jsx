import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../color";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthButton } from "../components/auth/AuthButton";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px; // same as : margin: 20px 0px 0px 0px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />

      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
