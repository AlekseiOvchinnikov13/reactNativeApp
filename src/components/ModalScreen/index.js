import React from "react"
import { StyleSheet, View, Modal, Picker } from "react-native"
import { pickerArray } from "../data"

const styles = StyleSheet.create({
  modalStyle: {},
  pickerBox: {},
  pickerStyle: {}
})

const ModalScreen = ({ isVisible, pickerHandler, pickerValue }) => (
  <Modal
    animationType="slide"
    visible={isVisible}
    transparent
    style={styles.modalStyle}
  >
    <View style={styles.pickerBox}>
      <Picker
        selectedValue={pickerValue}
        onValueChange={itemValue => pickerHandler(itemValue)}
        style={styles.pickerStyle}
      >
        {pickerArray.map(item => (
          <Picker.Item
            label={item.title}
            value={item.value}
            key={item.value.toString}
          />
        ))}
      </Picker>
    </View>
  </Modal>
)

export default ModalScreen
