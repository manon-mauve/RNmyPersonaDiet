import React, { useState } from "react";

import { View, StyleSheet, Text, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';

import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from "@react-navigation/native";

const CreateNewDataScreen = () => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');

  const navigation = useNavigation();

  const onCreateNewDataPressed = () => {
    console.warn('Créer');
  };

    const onHomePagePressed = () => {
    navigation.navigate('HomePage');
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
       <CustomButton
        text="Retour à la page d'accueil"
        onPress={onHomePagePressed}
        type="TERTIARY"
      />

      <Text style={styles.title}>Ajouter une nouvelle donnée</Text>

      <CustomInput
        name="date"
        placeholder="Date"
        value={date}
        setValue={setDate}
      />

      <CustomInput
        name="time"
        placeholder="Heure"
        value={time}
        setValue={setTime}
      />

      <CustomInput
        name="food"
        placeholder="Aliment"
        value={food}
        setValue={setFood}
      />

      <CustomInput
        name="quantity"
        placeholder="Quantité"
        value={quantity}
        setValue={setQuantity}
      />

      <CustomInput
        name="weight"
        placeholder="Poids"
        value={weight}
        setValue={setWeight}
      />      

      <CustomButton
        text="Créer"
        onPress={onCreateNewDataPressed}
        type="PRIMARY"
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
    fontSize: 18,
    fontWeight: "700",
  },

  
});

export default CreateNewDataScreen;


  
  /*const CreateNewDataScreen = ({ onAdd }) => {
    const form = useForm();

    const [input, setInput] = useState("");

    const handleSubmitAdd = (data) => {
      onAdd(data);
    };
  
    return (
      <View>

        <form onSubmit={form.handleSubmit(handleSubmitAdd)}>
        <FormControl>
            <Input
            {...form.register("date")}
            placeholder="Date"
            />
     
            <Input
            {...form.register("time")}
            placeholder="Heure"
            />
   
            <Input
            {...form.register("food")}
            placeholder="Aliment"
            />

            <Input 
            {...form.register("quantity")} 
            placeholder="Quantité" />

            <Input
            {...form.register("weight")}
            placeholder="Poids"
            />

            <Button mt={4} colorScheme="teal" type="submit">
            Ajouter
            </Button>
        </FormControl>
        </form>
    </View>
   
    );
  }

  export default CreateNewDataScreen;
  */