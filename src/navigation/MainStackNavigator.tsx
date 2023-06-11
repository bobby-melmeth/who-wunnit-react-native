import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator, { MainTabParamList } from './MainTabNavigator';
import SplashScreen from '../screens/Splash/SplashScreen';
import AuthStackNavigator, { AuthStackParamList } from './AuthStackNavigator';
import TeamStackNavigator, { TeamStackParamList } from './TeamStackNavigator';

export type MainStackParamList = {
    MainTabNavigator: NavigatorScreenParams<MainTabParamList>;
    AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>;
    SplashScreen: NavigatorScreenParams<AuthStackParamList>;
    TeamStackNavigator: NavigatorScreenParams<TeamStackParamList>

};

export default function MainStackNavigator() {
    const Stack = createNativeStackNavigator<MainStackParamList>();

    return (

            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
                <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
                <Stack.Screen name="TeamStackNavigator" component={TeamStackNavigator} />
            </Stack.Navigator>

    );
}