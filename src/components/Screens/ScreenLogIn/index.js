import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as Animatable from "react-native-animatable"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Header from "../../Header"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 150
  },
  rootView: {
    flex: 1
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
    width: "100%",
    paddingLeft: 25,
    marginTop: 20
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

const ScreenLogIn = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [animationTrigger, setAnimationTrigger] = useState(false)
  const navigation = useNavigation()
  const animateRef = useRef(null)

  const saveToStorage = async value => {
    try {
      await AsyncStorage.setItem("AUTHORIZED", value)
    } catch (er) {
      // eslint-disable-next-line no-console
      console.log(er)
    }
  }

  const onSubmit = async () => {
    if (login.length < 1) {
      setAnimationTrigger(!animationTrigger)
      return null
    }
    if (password.length < 1) {
      setAnimationTrigger(!animationTrigger)
      return null
    }
    await saveToStorage('true')
    navigation.navigate("Gallery")
  }

  useEffect(() => {
    animateRef.current.animate("swing", 500)
  }, [animationTrigger])

  return (
    <View style={styles.rootView}>
      <Header
        title="Log In"
        isNeedPrevBtn
      />
      <View style={styles.root}>
        <View style={styles.inputWrapper}>
          <Animatable.View
            style={{ width: "90%" }}
            ref={animateRef}
          >
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
          </Animatable.View>
        </View>
        <TouchableOpacity
          style={styles.submitStyle}
          onPress={onSubmit}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScreenLogIn
