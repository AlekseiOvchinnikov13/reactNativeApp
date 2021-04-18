import React from "react"
import { StyleSheet, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
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

  return (
    <View style={{ ...styles.headerWrapper, backgroundColor: isDark ? "#000" : "#fff" }}>
      <View style={styles.titleWrapper}>
        {isNeedPrevBtn && <PreviousButton onPress={() => navigation.goBack()} />}
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
