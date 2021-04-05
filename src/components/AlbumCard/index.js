import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#444",
    height: 185,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20
  },
  styleImg: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#444",
    height: 120
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%'
  },
  textStyle:{
    color: '#fff'
  },
  LinkTextStyle:{
    textTransform: 'uppercase',
    color: '#00ADD3'
  }
})

const AlbumCard = ({ title, img }) => (
    <View
      style={styles.containerStyle}>
      <Image
        style={styles.styleImg}
        source={img}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>Official photo for album</Text>
        <Text style={styles.LinkTextStyle}>{title}</Text>
      </View>
    </View>
  )

export default AlbumCard