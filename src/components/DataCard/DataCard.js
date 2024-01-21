import { Text, StyleSheet, Pressable } from 'react-native';

const DataCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.date} - {data.time}</Text>
      <Text>{data.food} - {data.quantity}</Text>
      <Text>{data.weight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FBF6EE',
      width: '90%',
      height: 50,
      justifyContent: 'center',
      borderRadius: 15,
      paddingHorizontal: 20,
      marginVertical: 10,
      color: '#585858',
    }
});

export default DataCard;
