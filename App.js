import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import StackNavigaton from './screens/AppMenu/StackNavigation';
import HomeScreen from './screens/HomeScreen';
import store from './screens/redux/store';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <View style={styles.container}>
          <StackNavigaton />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
