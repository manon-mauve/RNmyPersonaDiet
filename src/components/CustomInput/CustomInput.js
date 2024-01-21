import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#B8B8D2" 
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF6EE',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    color: '#585858',
  },
});

export default CustomInput;
