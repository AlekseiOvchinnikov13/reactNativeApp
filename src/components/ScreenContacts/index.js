import React from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import ContactCard from "../ContactCard"

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

const ScreenContacts = () => (
  <ScrollView style={styles.root}>
    <View style={styles.cardsWrapper}>
      <ContactCard />
    </View>
  </ScrollView>
)

export default ScreenContacts
