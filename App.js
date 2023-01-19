import Home from "./src/pages/Home/Home";
import Light from "./src/pages/Light/Light";
import Setting from "./src/pages/Setting/Setting";
import Login from "./src/pages/Login/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const { Navigator, Screen } = createNativeStackNavigator();
const tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Light" component={Light} />
        <tab.Screen name="Login" component={Login} />
        <tab.Screen name="Setting" component={Setting} />
      </tab.Navigator>
    </NavigationContainer>
  )
}


