import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect,useState } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    if (loaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        setSplashVisible(false); 
      }, 3000);
    }
  }, [loaded]);

  if (isSplashVisible || !loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
      </Stack>
  );
}
