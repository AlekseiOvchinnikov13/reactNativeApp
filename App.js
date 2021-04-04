import React, { useState } from "react"
import { View } from "react-native"
import TabBar from "./src/components/tabBar"
import Header from "./src/components/header"
import ScreenContacts from "./src/components/screenContacts"
import ScreenLogIn from "./src/components/screenLogIn"
import ScreenGallery from "./src/components/screenGallery"


const App = () => {
  const headers = ["Contacts", "Log In", "Gallery"]
  const [activeScreen, setActiveScreen] = useState(1)

  return (
    <View style={{ height: "100%", position: "relative" }}>
      <Header
        titlesArray={headers}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        isDark={activeScreen === 3}
      />
      {
        activeScreen === 1
          ? (<ScreenContacts />)
          : activeScreen === 2
          ? (<ScreenLogIn
            setActiveScreen={setActiveScreen}
          />)
          : (<ScreenGallery />)
      }
      {activeScreen !== 2 &&
      <TabBar
        setActiveScreen={setActiveScreen}
        isDark={activeScreen === 3}
      />}
    </View>
  )
}


export default App
