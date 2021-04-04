import React from "react"
import { StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  pageTitle: {
    fontWeight: "300",
    fontSize: 42,
    paddingLeft: 10
  }
})

const PageTitle = ({ title, isDark }) => <Text style={{ ...styles.pageTitle, color: isDark ? '#fff' : '#000' }}>{title}</Text>


export default PageTitle
