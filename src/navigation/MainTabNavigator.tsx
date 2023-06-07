import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { Platform, StyleSheet, Text } from 'react-native';
import COLORS from '../constants/theme/Colors';
import HomeIcon from '../../assets/icons/HomeIcon';


export type MainTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
}
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator detachInactiveScreens
            safeAreaInsets={{ bottom: 30 }}
            screenOptions={{ tabBarActiveTintColor: 'red', tabBarStyle: { height: 60, paddingTop: 10 }, headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: ({ focused }) => {
                    return focused ? <Text style={styles.label}>Home</Text> :
                        <Text style={styles.opaqueLabel}>Home</Text>
                },
                tabBarIcon: ({ focused }) => <HomeIcon active={focused} />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: COLORS.WHITE,
        borderColor: '#EDEDED',
        paddingTop: 15,
        height: 82
    },
    label: {
        fontSize: 10,
        paddingTop: 2,
        paddingBottom: Platform.OS === 'ios' ? 0 : 10,
        color: COLORS.RED
    },
    opaqueLabel: {
        fontSize: 10,
        paddingTop: 2,
        paddingBottom: Platform.OS === 'ios' ? 0 : 10,
        color: COLORS.DARK_GREY
    }
});