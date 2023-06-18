import React, { FC, useMemo } from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Standing, Table, TeamInStanding } from '../../screens/Home/types'
import TableTeamCard from './TableTeamCard'
import TableHeader from './TableHeader'
import { MainStackParamList } from '../../navigation/MainStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import TableTeamSkeleton from '../Skeletons/TableTeamSkeleton'

interface TableProps {
    tableInfo: Table[]
    isLoading: boolean
}

type NavigationList = NativeStackNavigationProp<MainStackParamList, 'MainTabNavigator'>;

const CompetitionTable: FC<TableProps> = ({ tableInfo, isLoading }) => {
    const navigation = useNavigation<NavigationList>();

    const renderItem = ({ item }: { item: Table }) => (
        <TableTeamCard team={item} onPress={() => 'add view team navigation'} />
    )

    const renderTable = () => {

        return (
            <View style={styles.flatListContainer}>
                {isLoading ? (
                    <FlatList
                        data={[...Array(14).keys()]}
                        keyExtractor={(item) => item.toString()}
                        renderItem={() => <TableTeamSkeleton rows={1} />}
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}


                    />
                ) : (
                    <FlatList
                        data={tableInfo}
                        keyExtractor={(item) => item.team.id.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        )
    }

    const memoisedFlatlist = useMemo(() => renderTable(), [isLoading])



    return (
        <View style={styles.mainContainer}>
            <TableHeader />

                {memoisedFlatlist}


        </View>
    )
}

export default CompetitionTable
const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 10,
        height: '80%',
        minWidth: Dimensions.get('window').width - 40,

    },
    scrollViewContainer: {


    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 185,
        marginBottom: 5

    },
    ladderKeys: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ladderKeyText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    flatListContainer: {
        flex: 1,
      },
      contentContainer: {

        flexGrow: 1,
        justifyContent: 'space-between',
      },
})