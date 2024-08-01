import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux';
import Router from './Router';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}