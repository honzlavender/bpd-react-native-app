import Home from './Components/WelcomeScreen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SupportHome from './Components/Support/SupportHome';
import CrisisKitHome from './Components/CrisisKit/CrisisKitHome';
import SongWordCount from './Components/CrisisKit/SongWordCount';
import Sketch from './Components/CrisisKit/Sketch';
import BabyAnimals from './Components/CrisisKit/BabyAnimals';
import FlappyBird from './Components/CrisisKit/FlappyBird';
import MemoryGame from './Components/CrisisKit/MemoryGame';
import IRLKit from './Components/CrisisKit/IRLKit';
import Hotlines from './Components/CrisisKit/Hotlines';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SupportHome" component={SupportHome} />
        <Stack.Screen name="CrisisKitHome" component={CrisisKitHome} options={{ headerShown: false }}/>
        <Stack.Screen name="SongWordCount" component={SongWordCount} options={{ headerShown: false }}/>
        <Stack.Screen name="Sketch" component={Sketch} options={{ headerShown: false }}/>
        <Stack.Screen name="BabyAnimals" component={BabyAnimals} options={{ headerShown: false }}/>
        <Stack.Screen name="FlappyBird" component={FlappyBird} options={{ headerShown: false }}/>
        <Stack.Screen name="MemoryGame" component={MemoryGame} options={{ headerShown: false }}/>
        <Stack.Screen name="IRLKit" component={IRLKit} options={{ headerShown: false }}/>
        <Stack.Screen name="Hotlines" component={Hotlines} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Navigator/>
  );
}
