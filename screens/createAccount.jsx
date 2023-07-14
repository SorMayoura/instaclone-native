import React, { useRef } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import styled from "styled-components/native";
import { AuthButton } from "../components/auth/AuthButton";

const Text = styled.TextInput`
  background-color: white;
  width: 100%;
`;

export default function CreateAccount() {
  //   const { LastNameRef, userNameRef, emailRef, passwordRef } = useRef(); // declare like this does not work
  const LastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onDone = () => {
    alert("done");
  };

  return (
    <AuthLayout>
      <Text
        nmae
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(LastNameRef)}
      />

      <Text
        ref={LastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
      />

      <Text
        ref={userNameRef}
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
      />

      <Text
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />

      <Text
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        returnKeyType="done"
        onSubmitEditing={() => onDone()}
      />

      <AuthButton
        text={"Create Account"}
        disabled={true}
        onPress={() => null}
      />
    </AuthLayout>
  );
}
