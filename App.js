import Home from "./src/pages/home/Home";
import Light from "./src/pages/light/Light";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Light" component={Light} />
        </Navigator>
    </NavigationContainer>
  )
}


