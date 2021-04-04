import React, { useState } from "react"
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 150
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 110
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#c0c1c1",
    borderRadius: 15,
    width: "90%",
    paddingLeft: 25
  },
  submitStyle: {
    borderRadius: 20,
    backgroundColor: "#00add3",
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19
  }
})

const ScreenLogIn = ({ setActiveScreen }) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = () => {
    login && password && setActiveScreen(3)
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your Login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.submitStyle}
        onPress={onSubmit}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenLogIn
