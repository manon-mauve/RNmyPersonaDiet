import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';

import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const HomePageScreen = () => {
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onAddNewDataPressed = () => {
    navigation.navigate('CreateNewData');
  };

  const onSeeAllDataPressed = () => {
    console.warn('Voir toutes');
  };

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue</Text>

        <Image
          style={[styles.cover, { height: height * 0.3 }]}
          resizeMode="contain"
          source={require('../../../assets/images/hp-img.png')}
        />

        <CustomButton
          text="Ajouter une donnée"
          onPress={onAddNewDataPressed}
          type="PRIMARY"
        />

        <CustomButton
          text="Voir toutes les données"
          onPress={onSeeAllDataPressed}
          type="PRIMARY"
        />

        <CustomButton
          text="Se déconnecter"
          onPress={onLoginPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: '#C1F2B0',
    borderRadius: 15,
  },

  container: {
    alignItems: 'center',
    width: '100%',
  },

  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  cover: {
    width: '100%',
    maxWidth: 250,
    maxHeight: 100,
    marginVertical: 20,
  },
});

export default HomePageScreen;
