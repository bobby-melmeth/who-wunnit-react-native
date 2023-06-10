import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ForgotPasswordEnterCode from '../screens/Auth/ForgotPasswordEnterCode';
import ForgotPasswordReset from '../screens/Auth/ForgotPasswordReset';


export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    ForgotPasswordEnterCode: { email: string };
    ForgotPasswordReset: undefined;
};



const AuthStackNavigator = () => {
    const Stack = createNativeStackNavigator<AuthStackParamList>()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotPasswordEnterCode" component={ForgotPasswordEnterCode} />
            <Stack.Screen name="ForgotPasswordReset" component={ForgotPasswordReset} />
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;