import { View, Text, StyleSheet} from 'react-native';

const DividerWithText = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineStyle} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.lineStyle}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    width: '80%',
  },

  lineStyle: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#585858',
  },

  text: {
    paddingHorizontal:8, 
    textAlign: 'center', 
    color: '#585858', 
  },
})

export default DividerWithText;
