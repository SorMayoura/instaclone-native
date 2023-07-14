import React from "react";
import styled from "styled-components/native";
import { colors } from "../../color";

const Button = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 13px 10px;  // order 2Case (Top&Bottom Right&Left) 4case: (Top Right Bottom Left)
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

export const AuthButton = ({text, disabled, onPress}) => { //
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
