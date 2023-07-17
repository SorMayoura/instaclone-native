import React from "react";
import styled from "styled-components/native";
import { colors } from "../../color";
import { ActivityIndicator } from "react-native";

const Button = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 15px 10px;  // order 2Case (Top&Bottom Right&Left) 4case: (Top Right Bottom Left)
    border-radius: 3px;
    width: 100%;
    opacity: ${(props) => props.disabled ? "0.5" : "1"};
`;

const ButtonText = styled.Text`
    background-color: ${colors.blue};
    color: white;
    font-weight: 600;
    text-align: center;
`;

export const AuthButton = ({text, disabled, onPress, loading}) => { //
  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}      
    </Button>
  );
};
