import { StyleSheet, Text, View,FlatList,TouchableOpacity } from "react-native";
import React from "react";

const index = ({listOfItems, onOpenModal}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={onOpenModal}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={listOfItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
