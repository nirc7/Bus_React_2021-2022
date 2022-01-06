import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import BottomTabNavigator from './Pages/BottomTabNavigator';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'Second' }}
      />
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ drawerLabel: 'BottomTab' }}
      />

    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  )
}
