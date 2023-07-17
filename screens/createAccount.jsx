import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthButton } from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();

  //   const { LastNameRef, userNameRef, emailRef, passwordRef } = useRef(); // declare like this does not work
  const LastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName",
      {required: true}
    );
    register("LastName",
      {required: true}
    );
    register("userName",
      {required: true}
    );
    register("email",
      {required: true}
    );
    register("password",
      {required: true}
    );

  }, [register]);

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(LastNameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("firstName", text)}
      />

      <TextInput
        ref={LastNameRef}
        placeholder="Last Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("LastName", text)}
      />

      <TextInput
        ref={userNameRef}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("userName", text)}
      />

      <TextInput
        ref={emailRef}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("email", text)}
      />

      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        lastOne={true}        
        autoCapitalize={'none'} // to avoid autocapitalizing the first letter of each word
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />

      <AuthButton
        text={"Create Account"}
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
