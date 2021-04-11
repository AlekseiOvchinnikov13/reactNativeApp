import React, { useState } from "react"
import { View } from "react-native"
import TabBar from "./src/components/TabBar"
import Header from "./src/components/Header"
import ScreenContacts from "./src/components/ScreenContacts"
import ScreenLogIn from "./src/components/ScreenLogIn"
import ScreenGallery from "./src/components/ScreenGallery"
import ModalScreen from "./src/components/ModalScreen"

const App = () => {
  const headers = ["Contacts", "Log In", "Gallery"]
  const [activeScreen, setActiveScreen] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [pickerValue, pickerValueChange] = useState(1)

  const pickerHandler = item => {
    pickerValueChange(item)
    setTimeout(() => setIsVisible(!isVisible), 1000)
  }

  return (
    <View style={{ height: "100%", position: "relative" }}>
      <Header
        titlesArray={headers}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        isDark={activeScreen === 3}
        pickerValue={pickerValue}
        setIsVisible={setIsVisible}
      />
      {
        activeScreen === 1
          ? (<ScreenContacts />)
          : activeScreen === 2
          ? (<ScreenLogIn
            setActiveScreen={setActiveScreen}
          />)
          : (<ScreenGallery pickerValue={pickerValue} />)
      }
      <ModalScreen
        isVisible={isVisible}
        PickerValue={pickerValue}
        pickerHandler={pickerHandler}
      />
      {activeScreen !== 2 &&
      <TabBar
        setActiveScreen={setActiveScreen}
        isDark={activeScreen === 3}
      />}
    </View>
  )
}

export default App
