import React, { useEffect, useState } from "react"
import { StyleSheet, FlatList, Alert, ActivityIndicator } from "react-native"
import AlbumCard from "../AlbumCard"
import { getAlbums } from "../../api"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: "#000"
  }
})

const ScreenGallery = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?_limit=50'
  const [albums, setAlbums] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)

  const alertHandler = (error) => {
    Alert.alert(
      `${error}`,
      `Repeat the request?`,
      [
        {
          text: "Cancel",
          onPress: () => {
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setRefresh(!refresh)
        }
      ],
      { cancelable: false }
    )
  }

  useEffect(() => {
    getAlbums(url, setAlbums, alertHandler, setLoading, loading)
  }, [refresh])

  const renderItem = ({ item }) => (
    <AlbumCard
      title={item.title}
      img={item.url}
    />
  )

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="black"
        style={styles.preloader}
      />)
  }
  return (
    <FlatList
      style={styles.root}
      data={albums}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default ScreenGallery
