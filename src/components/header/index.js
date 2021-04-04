import React from "react"
import { StyleSheet, View } from "react-native"
import PageTitle from "../pageTitle"
import PreviousButton from "../previousButton"

const styles = StyleSheet.create({
  headerWrapper: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const Header = ({ titlesArray, activeScreen, setActiveScreen, isDark }) => (
  <View style={{ ...styles.headerWrapper, backgroundColor: isDark ? '#000' : '#fff' }}>
    {activeScreen === 2 && <PreviousButton onPress={setActiveScreen}/>}
    <PageTitle title={titlesArray[activeScreen - 1]} isDark={isDark} />
  </View>
)

export default Header
