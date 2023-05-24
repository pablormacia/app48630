import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity } from 'react-native';

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

  const renderItem = ({item}) => (
      <TouchableOpacity onPress={onHandleOpenModal}><Text>{item.value}</Text></TouchableOpacity>
  )
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Item de lista' style={styles.input} onChangeText={onHandleChangeText} value={textItem} />
        <Button title="Add" onPress={addItem} />
      </View>
      <View>
        {/* {itemList.map(item=><Text>{item.value}</Text>)} */}
        <FlatList
          data={itemList}
          renderItem = {renderItem}
          keyExtractor={item=>item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalTitle}>
          <Text>Mi modal</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Estás seguro que deseas borrar?</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button onPress={()=>onHandleDelete(itemSelected.id)} title="Confirmar" />
        </View>
      </Modal>
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
  },
  modalTitle:{
    backgroundColor: "#ccc",
    color: 'white',
    fontSize: 18
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 15
  },
  modalItem: {
    fontSize: 30
  }
});
