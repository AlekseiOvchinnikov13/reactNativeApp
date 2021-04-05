import React from "react"
import { StyleSheet, FlatList } from "react-native"
import albumImg from "../../assets/img/albumImage.png"
import AlbumCard from "../AlbumCard"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: "#000"
  }
})

const albumData = [
  {
    id: 1,
    photo: albumImg,
    title: "album 1"
  },
  {
    id: 2,
    photo: albumImg,
    title: "album 2"
  },
  {
    id: 3,
    photo: albumImg,
    title: "album 3"
  },
  {
    id: 4,
    photo: albumImg,
    title: "album 4"
  },
  {
    id: 5,
    photo: albumImg,
    title: "album 5"
  }
]

const ScreenGallery = () => {
  const renderItem = ({ item }) => (
    <AlbumCard
      title={item.title}
      img={item.photo}
    />
  )


  return (
    <FlatList
      style={styles.root}
      data={albumData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default ScreenGallery
