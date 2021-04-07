import React from "react"
import { StyleSheet, Image } from "react-native"

const ContactIcon = ({ imageUri }) => {
  const imagePlag = {
    uri:
      "https://backmantitle.com/wp-content/uploads/2019/01/default-avatar.png"
  }
  const styles = StyleSheet.create({
    styleIco: {
      width: 63,
      height: 70,
      borderRadius: 50,
      flexBasis: "20%",
      borderWidth: 3,
      borderColor: '#00ADD3'
    }
  })
  const image = imageUri || imagePlag

  return <Image source={image} style={styles.styleIco} />
}



export default ContactIcon
