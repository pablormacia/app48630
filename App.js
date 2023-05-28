import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity } from 'react-native';
import ModalItem from './src/Modal';
import AddItem from './src/AddItem';
import Index from './src/components/lista'; //Según diapositivas. Corregir***

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList,setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible,setModalVisible] = useState(false)

  const onHandleChangeText = (t) =>  setTextItem(t)

  const addItem = () => {
    setItemList(currentItems => [...currentItems,{id: Math.random().toString(), value:textItem}])
    setTextItem('')
    console.log(itemList)
  }

  const onHandleOpenModal = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDelete = (id) => {
    console.log(id)
  }


  
  return (
    <View style={styles.screen}>
      <AddItem value={itemSelected} onChange={onHandleChangeText} onAddItem={addItem}/>
      <Index listOfItems={itemList} onOpenModal={onHandleOpenModal} />
      <ModalItem visible={modalVisible} item={itemSelected} onDelete={()=>onHandleDelete(itemSelected)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50,
  },
 
  
});
