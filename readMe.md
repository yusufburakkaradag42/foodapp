`

![Screenshot_1704797133](https://github.com/yusufburakkaradag42/foodapp/assets/118989504/1f60f0e1-24d6-4de8-b374-0496bb3f0aeb)
![Screenshot_1704797127](https://github.com/yusufburakkaradag42/foodapp/assets/118989504/96e934ac-985f-4658-a256-16917b9a18e3)
![Screenshot_1704797074](https://github.com/yusufburakkaradag42/foodapp/assets/118989504/f790b564-7a73-4330-9b7e-1027a6d2645c)
![Screenshot_1704797071](https://github.com/yusufburakkaradag42/foodapp/assets/118989504/cc419ab0-2b89-4e3d-8230-0535bdfac88f)



`

`LinearGranient
    https://docs.expo.dev/versions/latest/sdk/linear-gradient/
    npx expo install expo-linear-gradient
`
`   
    -- npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context
    npm install @react-navigation/native-stack


    // In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
`
