import Home from './Components/WelcomeScreen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SupportHome from './Components/Support/SupportHome';
import CrisisKitHome from './Components/CrisisKit/CrisisKitHome';
import SongWordCount from './Components/CrisisKit/SongWordCount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SupportHome" component={SupportHome} />
        <Stack.Screen name="CrisisKitHome" component={CrisisKitHome} options={{ headerShown: false }}/>
        <Stack.Screen name="SongWordCount" component={SongWordCount} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Navigator/>
  );
}
