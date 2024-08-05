import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './bottomTab';
import EditScreen from '../screens/EditScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false}} />
      <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
