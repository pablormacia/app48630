import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Item de lista' style={styles.input}/>
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
