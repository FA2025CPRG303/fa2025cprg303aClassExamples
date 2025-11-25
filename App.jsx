
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import CounterScreen from './src/screens/CounterScreen';
import AdoptionScreen from './src/screens/AdoptionScreen';
import GalleryScreen from './src/screens/GalleryScreen';

const RootStack = createNativeStackNavigator( {
  screens: {
    Home: HomeScreen,
    About: AboutScreen,
    Contact: ContactScreen,
    Counter: CounterScreen,
    Adopt: AdoptionScreen,
    Gallery: GalleryScreen
  }
} );

const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />
}

export default App;
