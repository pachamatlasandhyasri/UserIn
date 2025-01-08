import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <Link href={"/Screen2"} asChild>
      <TouchableOpacity>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
  </Link>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})