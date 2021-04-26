import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";

import { enableScreens } from "react-native-screens";
enableScreens();

import StackNavigator from "./navigation/StackNavigator";
import { Images, articles, argonTheme } from "./src/constants";

const assetImages = [
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo,
];

// cache product images
articles.map((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./src/assets/In/font/argon.ttf"),
  });

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  function _handleFinishLoading() {
    setLoading(true);
  }

  if (!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if (fontsLoaded) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <StackNavigator />
          </Block>
        </GalioProvider>
      </NavigationContainer>
      // <NavigationContainer>
      //   <StackNavigator />
      // </NavigationContainer>
    );
  } else {
    return null
  }
};
