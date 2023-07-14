import React, { useRef } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthButton } from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared"

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
        <TextInput
          placeholder="First Name"
          returnKeyType="next"
          onSubmitEditing={() => onNext(LastNameRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        />

        <TextInput
          ref={LastNameRef}
          placeholder="Last Name"
          returnKeyType="next"
          onSubmitEditing={() => onNext(userNameRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        />

        <TextInput
          ref={userNameRef}
          placeholder="Username"
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        />

        <TextInput
          ref={emailRef}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          returnKeyType="done"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          lastOne={true}
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
