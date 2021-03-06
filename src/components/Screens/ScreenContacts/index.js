import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  FlatList,
  Alert,
  LayoutAnimation,
  ActivityIndicator,
  Platform,
  UIManager,
  View
} from "react-native"
import ContactCard from "../../ContactCard"
import { getContacts } from "../../../api"
import Header from "../../Header"

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootChild: {
    alignItems: "center"
  },
  rootView: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cardsWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%"
  }
})

const ScreenContacts = () => {
  const usersCount = 5
  const url = `https://randomuser.me/api/?results=${usersCount}`
  const [contacts, setContacts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userIndex, setUserIndex] = useState(null)

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
      usersCount={usersCount}
      userIndex={userIndex}
      setUserIndex={setUserIndex}
    />
  )

  useEffect(() => {
    getContacts(url, setContacts, alertHandler, setLoading, loading)
  }, [refresh])

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
        title="Contacts"
      />
      <FlatList
        style={styles.root}
        contentContainerStyle={styles.rootChild}
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.name.first + item.name.last}
      />
    </View>
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
