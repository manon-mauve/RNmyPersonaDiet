import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 15,
  },

  container_PRIMARY: {
    backgroundColor: '#FFB534',
  },

  container_FORGETPASSWORD: {
    alignItems: 'flex-end',
    marginTop: 0,
  },
  
  container_TERTIARY: {
    marginTop: 0,
  },

  container_GOOGLE: {
    backgroundColor: '#FAE9EA',
    height: 40,
  },

  container_FACEBOOK: {
    backgroundColor: '#E7EAF4',
    height: 40,
  },

  text: {
    color: '#ffffff',
    fontSize: 16,
  },

  text_PRIMARY: {
    fontWeight: 500,
  },

  text_FORGETPASSWORD: {
    color: '#585858',
    textDecorationLine: 'underline',
    fontSize: 14,
  },

  text_GOOGLE: {
    color: '#DD4D44',
    fontSize: 14,
    fontWeight: 500,
  },

  text_FACEBOOK: {
    color: '#4765A9',
    fontSize: 14,
    fontWeight: 500,
  },

  text_TERTIARY: {
    color: '#585858',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default CustomButton;
