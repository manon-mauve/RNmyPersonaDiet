/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>Mon Régime Alimentaire</Text>
      </View>
      <RegisterScreen/>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#65B741',
    paddingTop: 50,
    fontFamily: 'Poppins',
  },

  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: "700",
  },

});

export default App;
