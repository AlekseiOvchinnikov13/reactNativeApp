import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppState } from "@react-native-community/hooks"
import PageTitle from "../PageTitle"
import PreviousButton from "../PreviousButton"
import SelectAlbumBtn from "../SelectAlbumBtn"

const styles = StyleSheet.create({
  headerWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center"
  }
})

const Header = ({ title, isDark, pickerValue, setIsVisible, isNeedPrevBtn, isNeedAlbums }) => {
  const navigation = useNavigation()
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
    if (currentAppState === ("background" || "inactive"))
      clearStorage()
  }, [currentAppState])

  useEffect(() => {
    getFromStorage()
  })

  const navigateHandle = () => {
    isNeedAlbums && isAuthorized && navigation.navigate("Contacts", { screen: "Contacts" })
    !isAuthorized && navigation.goBack()
  }

  return (
    <View style={{ ...styles.headerWrapper, backgroundColor: isDark ? "#000" : "#fff" }}>
      <View style={styles.titleWrapper}>
        {isNeedPrevBtn && <PreviousButton onPress={navigateHandle} />}
        <PageTitle title={title} isDark={isDark} />
      </View>
      {isNeedAlbums &&
      <SelectAlbumBtn
        pickerValue={pickerValue}
        onPress={setIsVisible}
      />}
    </View>
  )
}

export default Header
