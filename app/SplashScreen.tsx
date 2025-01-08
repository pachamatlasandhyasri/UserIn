import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Use expo-router's useRouter hook
import * as SplashScreen from 'expo-splash-screen';  // Splash screen API for Expo

const SplashScreenComponent = () => {
  const router = useRouter();  // Use the router for navigation

  useEffect(() => {
    // Prevent the splash screen from auto-hiding until we manually hide it
    SplashScreen.preventAutoHideAsync();

    console.log('SplashScreenComponent: Splash screen will be shown for 3 seconds');

    // Set a timeout to hide the splash screen after 3 seconds and navigate
    const timer = setTimeout(() => {
      console.log('SplashScreenComponent: 3 seconds passed, hiding splash screen and navigating to index');

      // Hide the splash screen
      SplashScreen.hideAsync();

      // Navigate to the main screen (index)
      router.replace('./index');  // Make sure the path is correct (for your main screen)

    }, 3000);  // Show the splash screen for 3 seconds

    // Clean up the timeout if the component unmounts
    return () => {
      clearTimeout(timer);
      console.log('SplashScreenComponent: Cleanup timeout');
    };
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}  // Replace with your splash image
        style={styles.logo}
      />
      <Text style={styles.text}>Design and develop by Need NB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',  // Ensure this matches your app's background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#636363',
    textAlign: 'center',
  },
});

export default SplashScreenComponent;
