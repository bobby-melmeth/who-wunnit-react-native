
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { navTheme } from './src/constants/theme/NavTheme';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (

    <NavigationContainer theme={navTheme}>
      <MainStackNavigator />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

});

export default App;
