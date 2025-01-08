import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import Colors from "@/constants/Colors";
  import React, { useRef, useState } from "react";
  import destinationCategories from '@/data/categories';
  
  type Props = {
    onCategoryChanged: (category: string) => void;
  };
  const CategoryButton = ({ onCategoryChanged }: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelectCategory = (index: number) => {
      const selected = itemRef.current[index];
      setActiveIndex(index);
      selected?.measure((fx, fy, width, height, px, py) => {
        console.log(
          `fx: ${fx}, fy: ${fy}, width: ${width}, height: ${height}, px: ${px}, py: ${py}`
        );
        scrollRef.current?.scrollTo({ x: px, y: 0, animated: true }); 
      });
      onCategoryChanged(destinationCategories[index].title)
    };
    return (
      <View>
        <Text style={styles.title}></Text>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          {destinationCategories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleSelectCategory(index);
              }}
              style={
                activeIndex == index
                  ? styles.categoryBtnActive
                  : styles.categoryBtn
              }
              ref={(el) => (itemRef.current[index] = el)}
            >
              
              <Text
                style={
                  activeIndex == index
                    ? styles.categoryBtnTxtActive
                    : styles.categoryBtnTxt
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  export default CategoryButton;
  const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      fontWeight: "700",
      color: Colors.black,
    },
    categoryBtn: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: '#F3F0F7',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 30,
      shadowColor: "black",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    categoryBtnTxt: {
      marginLeft: 5,
    },
    categoryBtnTxtActive: {
      marginLeft: 5,
      color: Colors.white,
    },
    categoryBtnActive: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: 'black',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 30,
      shadowColor: "black",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
  });