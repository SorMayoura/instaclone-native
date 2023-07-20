import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, isLoggedInVar, tokenVar, cache } from './apollo';
import LoggedInNav from './navigators/LoggedInNav';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const preloadAsset = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromise  = fontsToLoad.map((font) => Font.loadAsync(font));    

    const imageToLoad = ["./assets/logo.png"];
    const imagePromise = imageToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([
      ...fontPromise, 
      ...imagePromise
    ]);
  };

  const preload = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      isLoggedInVar(true);
      tokenVar(token)
    }

    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage)
    });
    
    return preloadAsset();
  }

  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    )
  }

  // get mode(dark/light) from Iphone: Appearance.getColorScheme()); import { Appearance, useColorScheme  } from 'react-native';
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
      
  );
}

