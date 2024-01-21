import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState('');

  const onSendPressed = () => {
    console.warn('Envoyer');
  };

  const onLoginPressed = () => {
    console.warn('Retour page connexion');
  };
  
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>
        Mot de passe oublié
        </Text>
        <Text style={styles.description}>
        Oups, on dirait que vous avez oublié votre mot de passe... Pas de panique ! Entrez votre adresse email ci-dessous et nous vous enverrons un lien pour le réinitialiser.
        </Text>
      

      <CustomInput
        name="email"
        placeholder="Votre adresse email"
        value={email}
        setValue={setEmail}
      />

      <CustomButton
        text="Envoyer"
        onPress={onSendPressed}
        type="PRIMARY"
      />

      <CustomButton
        text="Retour à la page de connexion"
        onPress={onLoginPressed}
        type="TERTIARY"
      />

      </View>
    
    </ScrollView>
  )
}

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

  description: {
    width: '90%',
    color: '#585858',
    textAlign: 'justify',
  }
});

export default ForgotPasswordScreen;