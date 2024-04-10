import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

import Register from './screens/Register';
import Login from './screens/Login';
import Onbroding from './screens/Onbroding';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen 
          name='LoginScreen' 
          component={Login} 
          options={{ headerShown: false }} // Hide header on this screen
        />
        <Stack.Screen name='Register' component={Register}
        options={{headerShown:false}} />
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ headerShown: true }} // Show header on this screen
        />
        <Stack.Screen name='Onboarding' component={Onbroding} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
