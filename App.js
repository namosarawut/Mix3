import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


//import TabScreen
import FeedScreen from './screen/FeedScreen';
import ChatScreen from './screen/ChatScreen';
import ProfileScreen from './screen/ProfileScreen';
import NavigationScreen from './screen/NavigationScreen';

//import DrawerScreen
import SideOneScreen from './screen/SideOne';
import SideTwoScreen from './screen/SideTwo';
import SideThreeScreen from './screen/SideThree';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const OptionHandler = () => ({
  headerShown: false
})



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Feed" component = {MyDrawer} options={OptionHandler}/>
      <Stack.Screen name = "Chat" component = {ChatScreen}  options={OptionHandler}/>
      <Stack.Screen name = "Profile" component = {ProfileScreen}  options={OptionHandler}/>
      <Stack.Screen name = "Notification" component = {NavigationScreen}  options={OptionHandler}/>
    </Stack.Navigator>
  );
}



function MyDrawer() {
  return (
    
      <Drawer.Navigator
      screenOptions={({ route }) => ({
          drawerIcon: ({  color, size }) => {
            if (route.name === 'Feed') {
              return (
                <Ionicons
                  name={'musical-note-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'One') {
              return (
                <Ionicons
                  name={'people-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Two') {
              return (
                <Ionicons
                  name={'pricetag-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Three') {
              return (
                <Ionicons
                  name={'star-outline'}
                  size={size}
                  color={color}
                />
              );
            } 
  
           
          },
        })}
  
      
        >
      <Drawer.Screen name = "Feed" component = {MyTab}/>
      <Drawer.Screen name = "One" component = {SideOneScreen}/>
      <Drawer.Screen name = "Two" component = {SideTwoScreen}/>
      <Drawer.Screen name = "Three" component = {SideThreeScreen}/>
    </Drawer.Navigator>
  );
}


function MyTab() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color,size }) => {
        if (route.name === 'Feed') {
          return (
            <Ionicons
              name='navigate'
              size={size}
              color={color}
            />
          )
        }else if (route.name === 'Chat') {
          return (
            <Ionicons
              name='chatbox'
              size={size}
              color={color}
            />
          )
        }else if (route.name === 'Profile') {
          return (
            <Ionicons
              name='person'
              size={size}
              color={color}
            />
          )
        }else if (route.name === 'Notification') {
          return (
            <Ionicons
              name='library'
              size={size}
              color={color}
            />
          )
        }
      }
    })} 

    tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name = "Feed" component = {FeedScreen}/>
      <Tab.Screen name = "Chat" component = {ChatScreen}/>
      <Tab.Screen name = "Profile" component = {ProfileScreen}/>
      <Tab.Screen name = "Notification" component = {NavigationScreen}/>
    </Tab.Navigator>
  );
}



export default function App() {
  return (
     <NavigationContainer>
       <MyStack/>
     </NavigationContainer>
  );
}


