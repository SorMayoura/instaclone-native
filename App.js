import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preLoading = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromise  = fontsToLoad.map((font) => Font.loadAsync(font));

    const imageToLoad = [
      "./assets/logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
    ];
    const imagePromise = imageToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([
      ...fontPromise, 
      ...imagePromise
    ]);
  }

  if (loading) {
    return (
      <AppLoading
        startAsync={preLoading}
        onError={console.warn}
        onFinish={onFinish}
      />
    )
  }

  // get mode(dark/light) from Iphone: Appearance.getColorScheme()); import { Appearance, useColorScheme  } from 'react-native';
  return (
    
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
  );
}

