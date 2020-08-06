import * as React from 'react';
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import NewOne from './src/Screens/NewOne';
import TextBox from './src/components/Todos/TextBox';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewOne" component={NewOne} />
        <Stack.Screen name="TextBox" component={TextBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
