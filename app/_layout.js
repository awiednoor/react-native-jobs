import { Stack } from 'expo-router';
import { useCallback } from 'react';
//for using cutom fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Makes the splash screen remain visible until the hide method is called
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMeduim: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      //Hides the splash screen after the app is loaded, then shows the homepage
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
