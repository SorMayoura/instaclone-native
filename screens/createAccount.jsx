import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthButton } from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createProfile(     
        $firstName: String!,
        $lastName: String,
        $email: String!
        $userName: String!, 
        $password: String!) {
          createProfile(
            userName: $userName, 
            firstName: $firstName, 
            password: $password, 
            email: $email, 
            LastName: $lastName) {
              status
              message
            }
        }
  `;

export default function CreateAccount({navigation}) {
  const { register, handleSubmit, setValue, getValues } = useForm();

  //   const { LastNameRef, userNameRef, emailRef, passwordRef } = useRef(); // declare like this does not work
  const LastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onCompleted = (data) => {
    const {
      createProfile : {
        status
      }
    } = data;

    const { userName, password } = getValues();

    if (status) {
      navigation.navigate('LogIn', {
        userName,
        password
      });
    }
  };

  const [createProfileMutation, {loading}] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted
  });

  const onValid = (data) => {
    if (!loading) {
      createProfileMutation({
        variables: {
          ...data
        }
      })
    }
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
