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

const TabBar = ({ isDark, navigation, state }) => (
  <View style={{ ...styles.root, backgroundColor: isDark ? "rgba(255, 255, 255, .9)" : "rgba(0, 0, 0, .7)" }}>
    {state?.routes
      .filter(item => item.name !== "Gallery")
      .map(item =>
        <TouchableOpacity
          key={item}
          onPress={() => navigation.navigate(item.name)}
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

export default TabBar
