import React from "react"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import AlbumNumberCircle from "../AlbumNumberCircle"

const styles = StyleSheet.create({
  selectWrapperStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  selectStyle: {
    color: "#00ADD3",
    fontSize: 26,
    marginRight: 7,
    textDecorationLine: "underline"
  }
})

const SelectAlbumBtn = ({ pickerValue, onPress }) => (
  <View style={styles.selectWrapperStyle}>
    <TouchableOpacity onPress={onPress()}>
      <Text style={styles.selectStyle}>Select album</Text>
    </TouchableOpacity>
    <AlbumNumberCircle pickerValue={pickerValue} />
  </View>
)

export default SelectAlbumBtn
