import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Loading } from "./src/components/loading";

import { AuthContextProvider } from "./src/contexts/AuthContext";

import SignIn from "./src/screens/signIn";
import Find from "./src/screens/find";
import New from "./src/screens/new";
import Pool from "./src/screens/pool";

import { theme } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Pool /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
