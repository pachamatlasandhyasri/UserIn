import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import Svg, { Path } from 'react-native-svg';

interface CategoryIconProps {
  color: string;
  size: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ color, size }) => (
  <Svg width={size || 25} height={size || 24} viewBox="0 0 25 24" fill="none" >
    <Path
      d="M4.33331 11H10.3333C10.5985 11 10.8529 10.8946 11.0404 10.7071C11.228 10.5196 11.3333 10.2652 11.3333 10V4C11.3333 3.73478 11.228 3.48043 11.0404 3.29289C10.8529 3.10536 10.5985 3 10.3333 3H4.33331C4.0681 3 3.81374 3.10536 3.62621 3.29289C3.43867 3.48043 3.33331 3.73478 3.33331 4V10C3.33331 10.2652 3.43867 10.5196 3.62621 10.7071C3.81374 10.8946 4.0681 11 4.33331 11ZM14.3333 11H20.3333C20.5985 11 20.8529 10.8946 21.0404 10.7071C21.228 10.5196 21.3333 10.2652 21.3333 10V4C21.3333 3.73478 21.228 3.48043 21.0404 3.29289C20.8529 3.10536 20.5985 3 20.3333 3H14.3333C14.0681 3 13.8137 3.10536 13.6262 3.29289C13.4387 3.48043 13.3333 3.73478 13.3333 4V10C13.3333 10.2652 13.4387 10.5196 13.6262 10.7071C13.8137 10.8946 14.0681 11 14.3333 11ZM4.33331 21H10.3333C10.5985 21 10.8529 20.8946 11.0404 20.7071C11.228 20.5196 11.3333 20.2652 11.3333 20V14C11.3333 13.7348 11.228 13.4804 11.0404 13.2929C10.8529 13.1054 10.5985 13 10.3333 13H4.33331C4.0681 13 3.81374 13.1054 3.62621 13.2929C3.43867 13.4804 3.33331 13.7348 3.33331 14V20C3.33331 20.2652 3.43867 20.5196 3.62621 20.7071C3.81374 20.8946 4.0681 21 4.33331 21ZM17.3333 21C19.5393 21 21.3333 19.206 21.3333 17C21.3333 14.794 19.5393 13 17.3333 13C15.1273 13 13.3333 14.794 13.3333 17C13.3333 19.206 15.1273 21 17.3333 21Z"
      fill={color || 'white'}
    />
  </Svg>
);

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
        padding: 0,
        width:'90%',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 19,
        shadowOffset: { width: 2, height: -4 },  
        shadowOpacity: 0.1,  
        shadowRadius: 10,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: "black",
      tabBarActiveBackgroundColor:'white',
      
    }}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <View style={{ flexDirection: 'row', 
                         alignItems: 'center',
                         justifyContent: 'center',
                         paddingVertical: 5,
                         paddingHorizontal: 10,
                         backgroundColor: focused ? 'white' : 'transparent',
                        }}>
            <Ionicons name='home' size={15} color={color} />
            {focused && <Text style={{ color, marginLeft: 5 }}>Home</Text>}
          </View>
        ),
      }} />
      <Tabs.Screen name='Category' options={{
        title: 'Category',
        tabBarIcon: ({ color, focused }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CategoryIcon color={color} size={22} />
            {focused && <Text style={{ color, marginLeft: 5 }}>Category</Text>}
          </View>
        ),
      }} />
      <Tabs.Screen name='Experience' options={{
        title: 'Experience',
        tabBarIcon: ({ color, focused }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='notifications-outline' size={22} color={color} />
            {focused && <Text style={{ color, marginLeft: 5 }}>Experience</Text>}
          </View>
        ),
      }} />
      <Tabs.Screen name='Favourites' options={{
        title: 'Favourites',
        tabBarIcon: ({ color, focused }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='heart' size={22} color={color} />
            {focused && <Text style={{ color, marginLeft: 5 }}>Favourites</Text>}
          </View>
        ),
      }} />
    </Tabs>
  );
}