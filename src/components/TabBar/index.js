import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppState } from "@react-native-community/hooks"

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    borderRadius: 20,
    width: "75%",
    height: 50,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-around"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19
  }
})

const TabBar = ({ isDark, navigation, state }) => {
  const [isAuthorized, setAuthorized] = useState(false)
  const currentAppState = useAppState()

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem("AUTHORIZED")
    } catch (er) {
      // eslint-disable-next-line no-console
      console.log(er)
    }
  }

  const getFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("AUTHORIZED")
      setAuthorized(!!value)
    } catch (er) {
      // eslint-disable-next-line no-console
      console.log(er)
    }
  }

  useEffect(() => {
    if (currentAppState === "background")
      clearStorage()
  }, [currentAppState])

  useEffect(() => {
    getFromStorage()
  })

  const navigateHandle = item => {
    if (isAuthorized && item.name === "Log In")
      navigation.navigate("Log In", { screen: "Gallery" })
    if (!isAuthorized)
      navigation.navigate(item.name)
  }

  if (state?.index === 1) return null

  return (
    <View style={{ ...styles.root, backgroundColor: isDark ? "rgba(255, 255, 255, .9)" : "rgba(0, 0, 0, .7)" }}>
      {state?.routes
        .map(item =>
          <TouchableOpacity
            key={item.name}
            onPress={() => navigateHandle(item)}
          >
            <Text
              style={{ ...styles.headerText, color: isDark ? "#000" : "#fff" }}
            >
              {item.name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
    </View>
  )
}

export default TabBar
