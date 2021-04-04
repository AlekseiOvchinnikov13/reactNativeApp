import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

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

const screenStings = ["Screen 1", "Screen 2", "Screen 3"]

const TabBar = ({ setActiveScreen, isDark }) => (
  <View style={{ ...styles.root, backgroundColor: isDark ? "rgba(255, 255, 255, .9)" : "rgba(0, 0, 0, .7)" }}>
    {screenStings.map((item, index) =>
      <TouchableOpacity
        key={item}
        onPress={() => setActiveScreen(index + 1)}
      >
        <Text style={{ ...styles.headerText, color: isDark ? "#000" : "#fff" }}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    )}
  </View>
)

export default TabBar
