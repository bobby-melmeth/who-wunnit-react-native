import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';


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
            screenOptions={{ tabBarActiveTintColor: 'red', tabBarStyle: { height:  60, paddingTop: 10 }, headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Yo' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;