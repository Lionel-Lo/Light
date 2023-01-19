// Import module 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

// Import screen

import Home from "./src/pages/Home/Home";
import Light from "./src/pages/Light/Light";
import Setting from "./src/pages/Setting/Setting";
import Login from "./src/pages/Login/Login";




// Creat navigation

const { Navigator } = createNativeStackNavigator();
const tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator

        // creation des incon importer

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Home") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name == "Light") {
              iconName = focused ? "flash" : "flash-outline"
            } else if (route.name == "Login") {
              iconName = focused ? "log-in" : "log-in-outline"
            } else if (route.name == "Setting") {
              iconName = focused ? "settings" : "settings-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}>


        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Light" component={Light} />
        <tab.Screen name="Login" component={Login} />
        <tab.Screen name="Setting" component={Setting} />
      </tab.Navigator>
    </NavigationContainer>
  )
}


