import { StyleSheet, Text, View,Button, Modal } from 'react-native'
import React from 'react'

const ModalItem = ({visible,onDelete,item}) => {
  return (
    <Modal visible={visible} animationType='slide'>
        <View style={styles.modalTitle}>
          <Text>Mi modal</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Estás seguro que deseas borrar?</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{item.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button onPress={()=>onDelete(item)} title="Confirmar" />
        </View>
      </Modal>
  )
}

export default ModalItem

const styles = StyleSheet.create({
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
})