import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    logo: string
    teamName: string
    onPress: () => void
}

const TeamLogo = ({ logo, teamName, onPress }: Props) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.container}>
                <Image source={{ uri: logo }} style={styles.logoStyle} />
                <Text style={styles.teamName}>{teamName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TeamLogo

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        alignItems: 'center',
    },
    logoStyle: {
        width: 100,
        height: 100
    },
    teamName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 5
    }
})