import React from "react"
import { StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    fontSize: 21,
    borderRadius: 50,
    backgroundColor: "#00ADD3",
    width: 36,
    height: 36,
    textAlign: "center",
    paddingTop: 3
  }
})

const AlbumNumberCircle = ({ pickerValue, styleCircle }) => (
  <Text style={{ ...styles.textStyle, ...styleCircle }}>{pickerValue}</Text>
)

export default AlbumNumberCircle
