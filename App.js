
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Tabs from './screens/Tabs';
import Details from './screens/Details';
import Cart from './screens/Cart';
import OrderPlaced from './screens/OrderPlaced';
import { Context } from './components/Context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Context>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen
            name="Order"
            component={OrderPlaced}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Context>
  );
}

const styles = StyleSheet.create({





});
