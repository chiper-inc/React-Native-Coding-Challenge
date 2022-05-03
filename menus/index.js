import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Index from '../views/Index'
import Detalles from '../views/detalles'
import { HeaderBackButton } from 'react-navigation-stack'

const AppSinTabs = createStackNavigator({
    Detalles: {
        screen: Detalles,
        navigationOptions: {
            headerBackVisible: true
        }

    },
});

const MisTabs = createMaterialTopTabNavigator(
    {
        pics: {
            screen: Index,
            navigationOptions: {
                title: 'Pics',
            }
        },
        top: {
            screen: Index,
            navigationOptions: {
                title: 'Top',
            }
        },
        popular: {
            screen: Index,
            navigationOptions: {
                title: 'Popular',
            }
        },
        hot: {
            screen: Index,
            navigationOptions: {
                title: 'Hot',
            }
        },
    },
    {
        initialRouteName: 'pics',
    }
)

const AppConTabs = createStackNavigator({
    Aceptadas: {
        screen: MisTabs,
        navigationOptions: {
            title: 'Reddit/r/programing'
        }
    },

})
export { AppConTabs, AppSinTabs }