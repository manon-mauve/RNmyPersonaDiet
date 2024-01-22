import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';

import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('HomePage');
  };

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Créer un compte</Text>

        <CustomInput
          name="email"
          placeholder="Votre adresse email"
          value={email}
          setValue={setEmail}
        />

        <CustomInput
          name="password"
          placeholder="Votre mot de passe"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput
          name="passwordRepeat"
          placeholder="Confirmez votre mot de passe"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton
          text="S'inscrire"
          onPress={onRegisterPressed}
          type="PRIMARY"
        />

        <CustomButton
          text="Déjà inscrit ? Connectez-vous."
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
});

export default RegisterScreen;