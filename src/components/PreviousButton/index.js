import React from "react"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import prevArrow from "../../assets/img/prevArrow.png"

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#00ADD3",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  iconStyle: {
    width: 20,
    height: 25
  }
})

const PreviousButton = ({ onPress, styleBtn }) => (
  <TouchableOpacity
    style={{ ...styles.buttonStyle, ...styleBtn }}
    onPress={onPress}>
    <Image
      style={styles.iconStyle}
      source={prevArrow} />
  </TouchableOpacity>
)

export default PreviousButton
