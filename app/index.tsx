import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React,{ useEffect} from "react";
import { Link, useNavigation } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './SplashScreen';

type Props = {};

const WelcomeScreen = (props: Props) => {
  const navigation = useNavigation(); 

  useEffect(() => {
   
    navigation.setOptions({ headerShown: false });

   
    return () => {
      navigation.setOptions({ headerShown: true }); 
    };
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
          <Icon name="arrow-forward" size={20} color="#636363" style={styles.arrowIcon} />
        </TouchableOpacity>
      </Link>
      <Image
        source={require('../app/logoo.png')}
        style={styles.logoo}
      />
      <Image
        source={require('../app/screen1.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Experience the embrace of elegance.</Text>
      <Text style={styles.paragraph}>Indulge in luxurious details, welcoming you to refined living.</Text>
      <Link href={"/Screen2"} asChild>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Start</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    zIndex: 1,
    marginBottom: 20,
  },
  logoo:{
    resizeMode: 'cover',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    width: 310,
    backgroundColor: 'black',
    borderRadius: 30,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipButton: {
    top: 30,
    right: 20,
    position: 'absolute',
    padding: 10,
    zIndex: 2,
    flexDirection:'row',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#636364', 
    marginRight: 5,
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent:'center',
    paddingHorizontal: 110,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 130,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 29,
    paddingHorizontal: 30,
    marginBottom: 10,
    marginTop: 0,
    zIndex: 3,
    width: '90%',
  },
  paragraph: {
    color:'#4A4A4B',
    paddingHorizontal: 30,
    zIndex: 2,
    width: '90%',
    marginBottom: 50,
  },
  arrowIcon: {
    marginLeft: 0, 
  },
});
