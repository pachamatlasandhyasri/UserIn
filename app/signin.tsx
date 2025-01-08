import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link, router, useNavigation } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const SignInScreen = (props: Props) => {
  const navigation = useNavigation(); 

  useEffect(() => {
    
    navigation.setOptions({ headerShown: false });

    
    return () => {
      navigation.setOptions({ headerShown: true }); 
    };
  }, [navigation]);
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      {/* <Link href={"/(tabs)"} asChild> */}
        <TouchableOpacity  style={styles.skipButton} onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
          <Text style={styles.skipButtonText}>Skip</Text>
          <Icon name="arrow-forward" size={20} color="#636363" style={styles.arrowIcon} />
        </TouchableOpacity>
      {/* </Link> */}
      <Image
        source={require('../app/logoo.png')}
        style={styles.logoo}
      />
      <Image
        source={require('../app/screen4.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Claim your fame.</Text>
      <Text style={styles.paragraph}>Step up, fame awaits your signature move!</Text>
      <Image 
         source={require('./Group.png')}
         style={styles.person}
      />
      <TextInput
      
        style={styles.inputField}
        placeholder = "Example: Nagendra" 
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.note}>*Note: Your Fame title view on main screen! & We are not collecting any data from you!</Text>
      <Link href={"./(tabs)"} asChild>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Icon name="arrow-forward" size={20} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoo: {
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: 250,
  },
  person: {
    top: 33,
    right: 108,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    width: 310,
    backgroundColor: 'white',
    borderRadius:310,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 0,
  },
  skipButton: {
    top: 20,
    right: 20,
    position: 'absolute',
    padding: 10,
    flexDirection: 'row',
  },
  skipButtonText: {
    color: '#636364', 
  },
  nextButtonText: {
    color: 'black',
    fontSize: 16,
    marginRight: 8,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 30,
    width:'80%',
  },
  paragraph: {
    color:'black',
    paddingHorizontal: 30,
    width:'70%',
    fontSize: 15,
    marginRight: 37,
  },
  note: {
    color:'#4A4A4B',
    paddingHorizontal: 30,
    marginBottom: 10,
    width: '80%',
    fontSize: 13,
  },
  inputField: {
    height: 45,
    width: 310,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor:'black',
    fontSize: 16,
    color:'#AAA8AD',
  },
  
  icon: {
    marginRight: 10, 
  },
  arrowIcon: {
    marginLeft: 0, 
  },
})