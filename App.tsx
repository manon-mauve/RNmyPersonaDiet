/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './src/navigation';


const App = () => {

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>Mon Régime Alimentaire</Text>
        <Navigation />
      </View>
             
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#65B741',
    paddingTop: 50,
  },

  container: {
    flex: 1,    
  },

  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 30,
  }
});

export default App;
