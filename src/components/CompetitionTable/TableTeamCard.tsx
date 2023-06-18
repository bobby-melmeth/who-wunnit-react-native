import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Table, TeamInStanding } from '../../screens/Home/types'
import Divider from '../Common/Divider'

interface TableTeamCardProps {
    team: Table

    onPress: () => void
}

const TableTeamCard: FC<TableTeamCardProps> = ({ team, onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                <View style={styles.card}>
                    <Text style={{  marginRight: 5, minWidth: 17 }}>{team.position}</Text>
                    <Image source={{ uri: team.team.crest }} style={styles.image} />
                    <Text style={styles.teamName} numberOfLines={1} ellipsizeMode={'tail'}>{team.team.name}</Text>
                    <View style={styles.statValuesContainer}>
                        <Text style={{ minWidth: 17, fontWeight: '500' }}>{team.playedGames} </Text>
                        <Text style={{ minWidth: 17, fontWeight: '500' }}>{team.points} </Text>
                        <Text style={{ minWidth: 30, fontWeight: '500' }}>{team.goalDifference} </Text>
                    </View>

                </View>
            </TouchableOpacity>
            <Divider />
        </View>
    )
}

export default TableTeamCard
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        marginRight: 5,
    },
    statValuesContainer: {
        marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', width: 160, alignItems: 'center'
    },
    teamName: {
        fontSize: 12,
        fontWeight: '600',
        minWidth: 120,
        maxWidth: 110
    }
})