import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import TabBar from "../components/TabBar"
import ScreenContacts from "../components/Screens/ScreenContacts"
import ScreenLogIn from "../components/Screens/ScreenLogIn"
import ScreenGallery from "../components/Screens/ScreenGallery"


const RootStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const TabScreens = () => (
  <Tabs.Navigator
    headerMode="none"
    initialRouteName="Contacts"
    tabBar={({ navigation, state }) => <TabBar {...{ navigation, state }} />}
  >
    <RootStack.Screen name="Contacts" component={ScreenContacts} />
    <RootStack.Screen name="Log In" component={ScreenLogIn} />
    <RootStack.Screen name="Gallery" component={ScreenGallery} />
  </Tabs.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator
      initialRoutename="TabsScreens"
      headerMode="none"
    >
      <RootStack.Screen name="TabScreens" component={TabScreens} />
    </RootStack.Navigator>
  </NavigationContainer>
)

export default Navigation
