import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';

import CustomButton from '../../components/CustomButton/CustomButton';

import DividerWithText from '../../components/DividerWithText/DividerWithText';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    console.warn('Se connecter');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Mot de passe oublié ?');
  };

  const onRegisterPressed = () => {
    console.warn('Créer un compte');
  };

  const onLoginWithGooglePressed = () => {
    console.warn('Connexion avec Google');
  };

  const onLoginWithFacebookPressed = () => {
    console.warn('Connexion avec Facebook');
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>

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

        <CustomButton
          text="Mot de passe oublié ?"
          onPress={onForgotPasswordPressed}
          type="FORGETPASSWORD"
        />

        <CustomButton
          text="Se connecter"
          onPress={onLoginPressed}
          type="PRIMARY"
        />

        <CustomButton
          text="Pas encore inscrit ? Créez votre compte."
          onPress={onRegisterPressed}
          type="TERTIARY"
        />

        <DividerWithText text="ou" />

        <CustomButton
          text="Connexion avec Google"
          onPress={onLoginWithGooglePressed}
          type="GOOGLE"
        />

        <CustomButton
          text="Connexion avec Facebook"
          onPress={onLoginWithFacebookPressed}
          type="FACEBOOK"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 30,
    paddingVertical: 20,
    width: '90%',
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

export default LoginScreen;