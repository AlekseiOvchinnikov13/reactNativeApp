import React, { useEffect, useState } from "react"
import { StyleSheet, FlatList, Alert, ActivityIndicator, View } from "react-native"
import { getAlbums } from "../../../api"
import AlbumCard from "../../AlbumCard"
import Header from "../../Header"
import ModalScreen from "../ModalScreen"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: "#000"
  },
  rootView: {
    flex: 1
  }
})

const ScreenGallery = () => {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=200"
  const [albums, setAlbums] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [pickerValue, setPickerValue] = useState(1)

  const pickerHandler = item => {
    setPickerValue(item)
    setIsVisible(!isVisible)
  }

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
      albumNumber={item.albumId}
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
    <View style={styles.rootView}>
      <Header
        title="Gallery"
        pickerValue={pickerValue}
        setIsVisible={() => setIsVisible(!isVisible)}
        isNeedAlbums
        isDark
      />
      <ModalScreen
        isVisible={isVisible}
        pickerValue={pickerValue}
        pickerHandler={pickerHandler}
      />
      <FlatList
        style={styles.root}
        data={albums.filter(item => item.albumId === pickerValue)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ScreenGallery
