import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DBItemsScreen from './screens/DBItemsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' options={{}}>
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name='DB'
          component={DBItemsScreen}
          options={{
            title: 'From Database ',
            headerStyle: {
              backgroundColor: '#182151',
              elevation: 2,
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
