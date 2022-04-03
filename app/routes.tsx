import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import New from './layouts/new';
import Top from './layouts/top';
import Controversial from './layouts/controversial';
import Hot from './layouts/hot';


const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName='New'>
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Controversial" component={Controversial} />
      <Tab.Screen name="Hot" component={Hot} />
    </Tab.Navigator>
  );
}

export default RootNavigator;