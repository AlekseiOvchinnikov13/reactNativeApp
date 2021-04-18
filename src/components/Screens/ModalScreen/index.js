import React from "react"
import { StyleSheet, View, Modal } from "react-native"
import { Picker } from "@react-native-community/picker"
import { pickerArray } from "../../data"

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1
  },
  pickerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  pickerStyle: {
    width: "100%",
    color: "#fff"
  }
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
        onValueChange={(itemValue) => pickerHandler(itemValue)}
        style={styles.pickerStyle}
        mode="dialog"
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
