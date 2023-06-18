
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { navTheme } from './src/constants/theme/NavTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

console.log(process.env.XAUTH_TOKEN)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient} >
      <NavigationContainer theme={navTheme}>
        <MainStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>


  );
}

const styles = StyleSheet.create({

});

export default App;
