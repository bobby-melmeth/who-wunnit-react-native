import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import TeamLogo from '../../components/Cards/TeamLogo'
import { Team } from './types'
import LogoSkeleton from '../../components/Skeletons/LogoSkeleton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../../navigation/MainStackNavigator'
import { useGetStandings, useGetTeams } from '../../services/teamservice'
import CompetitionTable from '../../components/CompetitionTable/CompetitionTable'


type NavigationList = NativeStackNavigationProp<MainStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationList>()
  const [year, selectedYear] = useState(2022)
  const { data: teams, isLoading: isGetTeamsLoading, error: isGetTeamsError } = useGetTeams()
  const { data: standings, isLoading: isGetStandingsLoading, error: isGetStandingsError } = useGetStandings(year)

  const ladderTeams = standings && standings[0]?.table?.map((table) => table)

  const renderTeamLogo = () => {
    if (!teams) return
    if (isGetTeamsLoading) return (
      <LogoSkeleton rows={10} />
    )
    return teams.map((team, index) => (
      <TeamLogo key={index} logo={team.crest} teamName={team.name} onPress={() => navigation.navigate('TeamStackNavigator', { screen: 'ViewTeam', params: { team } })} />
    ))
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderTeamLogo()}
      </ScrollView>
      <CompetitionTable tableInfo={ladderTeams} isLoading={isGetStandingsLoading} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  ladderKeys: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ladderKeyText: {
    fontSize: 12,
    fontWeight: 'bold',
  }
})