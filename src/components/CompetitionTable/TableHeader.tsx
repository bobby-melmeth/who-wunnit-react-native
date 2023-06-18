import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TableHeaderProps {

}

const TableHeader: FC<TableHeaderProps> = ({ }) => {
    return (

        <View style={styles.ladderKeys}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.ladderKeyText, { fontWeight: '800', marginRight: 1, marginLeft: -7, fontSize: 12 }]}>Pos</Text>
                <Text style={[styles.ladderKeyText, {marginLeft: 5}]}>Team</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.ladderKeyText}>Matches</Text>
                <Text style={styles.ladderKeyText}>Points</Text>
                <Text style={styles.ladderKeyText}>Goals+/-</Text>
            </View>
        </View>
    )
}

export default TableHeader
const styles = StyleSheet.create({
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 175,
        marginBottom: 10

    },
    ladderKeys: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ladderKeyText: {
        fontSize: 12,
        fontWeight: '800',
    }
})