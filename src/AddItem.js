import { StyleSheet, TextInput, View,Button } from "react-native";
import React from "react";

const AddItem = ({onChange,onAddItem,value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Item de lista"
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
      <Button title="Add" onPress={onAddItem} />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      input:{
        width: 200,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
});
