import React, { useState, useEffect } from "react"
import { StyleSheet, FlatList, Alert, LayoutAnimation, ActivityIndicator, Platform, UIManager } from "react-native"
import ContactCard from "../ContactCard"
import { getContacts } from "../../api"

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  cardsWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }
})

const ScreenContacts = () => {
  const url = "https://randomuser.me/api/?results=50"
  const [contacts, setContacts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
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
    getContacts(url, setContacts, alertHandler, setLoading, loading)
  }, [refresh])

  const cardPress = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setContacts([
      ...contacts.map(item => {
        if (item.id === id)
          // eslint-disable-next-line no-param-reassign
          item.isOpen = !item.isOpen
        return item
      })
    ])
  }

  const renderItem = ({ item }) => (
    <ContactCard
      contact={item}
      onPress={cardPress}
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
      data={contacts}
      renderItem={renderItem}
      keyExtractor={item => item.name.first + item.name.last}
    />
  )
}
export default ScreenContacts

/*const asyncHandler = async () => {
try {
  const response = await fetch(url)
  const users = await response.json()
  setContacts(users)
  setLoading(!loading)
} catch (error) {
  alertHandler(error)
  setLoading(!loading)
}
}*/
