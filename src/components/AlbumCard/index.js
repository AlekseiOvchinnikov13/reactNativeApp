import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"
import albumImg from "../../assets/img/albumImage.png"
import AlbumNumberCircle from "../AlbumNumberCircle"

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
    color: '#00ADD3',
    marginRight: 5
  },
  albumWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  styleCircle:{
    width: 21,
    height: 21,
    paddingTop: 2,
    fontSize: 13
  }
})

const AlbumCard = ({ albumNumber, img }) => (
    <View
      style={styles.containerStyle}>
      <Image
        style={styles.styleImg}
        source={img ? { uri: img } : albumImg}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>Official photo for album</Text>
        <View style={styles.albumWrapper}>
          <Text style={styles.LinkTextStyle}>album</Text>
          <AlbumNumberCircle
            pickerValue={albumNumber}
            styleCircle={styles.styleCircle}
          />
        </View>
      </View>
    </View>
  )

export default AlbumCard
