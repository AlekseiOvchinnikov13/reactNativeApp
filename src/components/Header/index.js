import React from "react"
import { StyleSheet, View } from "react-native"
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

const Header = ({ titlesArray, activeScreen, setActiveScreen, isDark, pickerValue, setIsVisible }) => (
  <View style={{ ...styles.headerWrapper, backgroundColor: isDark ? "#000" : "#fff" }}>
    <View style={styles.titleWrapper}>
      {activeScreen === 2 && <PreviousButton onPress={setActiveScreen} />}
      <PageTitle title={titlesArray[activeScreen - 1]} isDark={isDark} />
    </View>
    {activeScreen === 3 &&
    <SelectAlbumBtn
      pickerValue={pickerValue}
      onPress={setIsVisible}
    />}
  </View>
)

export default Header
