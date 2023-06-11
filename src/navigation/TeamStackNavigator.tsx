import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Team } from '../screens/Home/types';
import ViewTeam from '../screens/Team/ViewTeam';
import ViewPlayer from '../screens/Team/ViewPlayer';
import { Player } from '../types/Player';

export type TeamStackParamList = {
    ViewTeam: { team: Team };
    ViewPlayer: { player: Player }
}


const TeamStackNavigator = () => {
    const Stack = createStackNavigator<TeamStackParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ViewTeam" component={ViewTeam} />
            <Stack.Screen name="ViewPlayer" component={ViewPlayer} />
        </Stack.Navigator>

    )
}


export default TeamStackNavigator;