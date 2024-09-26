import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { enableScreens } from 'react-native-screens';
import { AppConTabs, AppSinTabs } from './menus'

enableScreens();

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppConTabs,
      Auth: AppSinTabs
    },
    {
      initialRouteName: 'App',
    }
  )
)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}