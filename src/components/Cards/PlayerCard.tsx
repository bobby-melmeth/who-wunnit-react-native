import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TYPOGRAPHY from '../../constants/theme/Typography'

type Props = {
    name: string
    position: string
    nationality: string
    onPress: () => void
}

const PlayerCard = ({ name, nationality, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/defaultpic.png')} style={styles.imageStyle} />
                <Text style={styles.name}>{name}</Text>
                <Text>{nationality}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlayerCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 2,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imageStyle: {
        width: 100,
        height: 120,
    },
    name: {
        maxWidth: 100,

    }
})