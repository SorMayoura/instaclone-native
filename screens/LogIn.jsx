import React, { useEffect, useRef } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { AuthButton } from "../components/auth/AuthButton";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      status
      message
      token
    }
  }
`;

export default function LogIn({ route: { params } }) {
  const { setValue, handleSubmit, register, watch } = useForm({
    defaultValues: {
        userName: params?.userName,
        password: params?.password
    }
  });
  const passwordRef = useRef();

  function onNext(nextOne) {
    nextOne?.current?.focus();
  }

  const onCompleted = (data) => {
    const {
      login: { status, message, token },
    } = data;

    if (status) {
      isLoggedInVar(true);
    }
  };

  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  function onValid(data) {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  }

  useEffect(() => {
    register("userName", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        value={watch("userName")}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => {
          setValue("userName", text);
        }}
      />
      <TextInput
        value={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => {
          setValue("password", text);
        }}
      />
      <AuthButton
        text={"Log In"}
        loading={loading}
        disabled={!watch("userName") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
