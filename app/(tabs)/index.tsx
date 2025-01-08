import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View, Text, Touchable, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import CategoryButton from '@/app/components/CategoryButton';
import { useState } from "react";
import Svg, { Path } from 'react-native-svg';

type Props = {}

const HomeScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const onCatChanged = (category: string) => {
    console.log(category);
    setCategory(category);
  };
  return (
    <>
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={require('../logoo.png')}
              style={{ width: 150, height: 40, top: 10, }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <svg width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{ position: 'absolute', right: 20, top: 20, borderRadius: 10}} >
          <path d="M10 11.6666L18.3333 11.6666C18.7754 11.6666 19.1993 11.8422 19.5119 12.1548C19.8244 12.4673 20 12.8913 20 13.3333C20 13.7753 19.8244 14.1992 19.5119 14.5118C19.1993 14.8244 18.7754 15 18.3333 15L10 15C9.55798 15 9.13406 14.8244 8.8215 14.5118C8.50894 14.1992 8.33334 13.7753 8.33334 13.3333C8.33334 12.8913 8.50894 12.4673 8.8215 12.1548C9.13406 11.8422 9.55798 11.6666 10 11.6666ZM21.6667 25L30 25C30.442 25 30.866 25.1756 31.1785 25.4881C31.4911 25.8007 31.6667 26.2246 31.6667 26.6666C31.6667 27.1087 31.4911 27.5326 31.1785 27.8451C30.866 28.1577 30.442 28.3333 30 28.3333H21.6667C21.2247 28.3333 20.8007 28.1577 20.4882 27.8451C20.1756 27.5326 20 27.1087 20 26.6666C20 26.2246 20.1756 25.8007 20.4882 25.4881C20.8007 25.1756 21.2247 25 21.6667 25ZM10 18.3333L30 18.3333C30.442 18.3333 30.866 18.5089 31.1785 18.8214C31.4911 19.134 31.6667 19.5579 31.6667 20C31.6667 20.442 31.4911 20.8659 31.1785 21.1785C30.866 21.491 30.442 21.6666 30 21.6666L10 21.6666C9.55798 21.6666 9.13406 21.491 8.8215 21.1785C8.50894 20.8659 8.33334 20.442 8.33334 20C8.33334 19.5579 8.50894 19.134 8.8215 18.8214C9.13406 18.5089 9.55798 18.3333 10 18.3333Z" fill="black"/>
          </svg>
        ),
      }}
    />
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <Text style={styles.hi}>Hi!</Text>
      <Text style={styles.headingTxt}>Nagendra Babu Yadav</Text>
      <Text style={styles.description}>What's sparking your curiosity today?</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.SearchBar}>
            <TextInput placeholder="Discover with ease!" />
            <Ionicons
              name="search"
              size={18}
              style={{ left: 130 }}
              color={Colors.black}
            />
          </View>
          
        </View>
        <CategoryButton onCategoryChanged={onCatChanged} />
        
        <TouchableOpacity
          onPress={() => {}}
          style={styles.heartIcon}
        >
          <Ionicons name="heart-outline" size={30} color={Colors.black} />
        </TouchableOpacity>
        
        <View style={styles.card}>
        <Image
          source={require('./Rectangle 8.png')}
          style={styles.image}
        />
        <View style={styles.contain}>
          <View style={styles.button}>
           <Text style={styles.buttonText}>Icon</Text>
          </View>
          <View style={styles.button}>
           <Text style={styles.buttonText}>3D</Text>
          </View>
          <View style={styles.button}>
           <Text style={styles.buttonText}>Rule</Text>
          </View>
          <View style={styles.button}>
           <Text style={styles.buttonText}>Iconography</Text>
          </View>
        </View>
        <Text style={styles.heading}>About color palette.</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>
        </View>

        <TouchableOpacity
            style={styles.svgButton}
            onPress={() => {
              // Action for SVG button
              console.log("SVG Button Pressed");
            }}
        >
         <svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.11763" width="45.5637" height="44.5637" rx="22.2818" transform="matrix(0.69852 -0.71559 0.69852 0.71559 0.352508 34.086)" stroke="black" stroke-width="1.6"/>
          <path d="M41.667 23.6512L25.5439 23.6512M41.667 23.6512L41.667 40.1683M41.667 23.6512L22.8567 42.9212" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </>
);
}; 
  

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '80%',
    height: 260,
    marginBottom: 20,
    resizeMode: 'cover',
    zIndex: 1,
    alignSelf: 'center', 
    color: '#F3F0F7'
  },
  hi: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.black,
    marginTop: 10,
    left: 10,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
    left: 10,
  },
  description: {
    left: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 30,
    marginTop: 0,
    zIndex: 3,
    width: '90%',
  },
  paragraph: {
    color:'#4A4A4B',
    paddingHorizontal: 30,
    zIndex: 2,
    width: '80%',
    marginBottom: 15,
  },
  SearchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#F3F0F7',
    padding: 16,
    borderRadius: 30,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 30,
    marginLeft: 20,
  },
  heartIcon: {
    position: 'absolute',   
    top: 170,                
    right: 8,              
    zIndex: 2,              
    padding: 10,
    backgroundColor: '#F3F0F7',
  },
  svgButton: {
    position: 'absolute',   
    bottom: 2,             
    right: 1,             
    zIndex: 3,              
    padding: 10,
    backgroundColor: '#F3F0F7',
    borderRadius: 20,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
   
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
  card:{
    backgroundColor:'#F3F0F7',
    borderRadius: 30,
  }
})