import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { getTeams } from '../../services/teamservice'
import TeamLogo from '../../components/Cards/TeamLogo'
import { Team } from './types'
import LogoSkeleton from '../../components/Skeletons/LogoSkeleton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../../navigation/MainStackNavigator'
import { Svg } from 'react-native-svg'

type NavigationList = NativeStackNavigationProp<MainStackParamList>;

const HomeScreen = () => {
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigation = useNavigation<NavigationList>()
  const isFocused = useIsFocused()

  useEffect(() => {
    getAllTeams()
  }, [isFocused, shouldRefetch])

  const getAllTeams = async () => {
    setIsLoading(true)
    try {
      const data = await getTeams()
      setTeams(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const renderTeamLogo = () => {
    if(!teams) return
    if (isLoading) return (
      <LogoSkeleton rows={10} />
    )
    return teams.map((team, index) => (
      <TeamLogo key={index} logo={team.crest} teamName={team.name} onPress={() => navigation.navigate('TeamStackNavigator', {screen: 'ViewTeam', params: {team}})} />
    ))
  }

  return (
    <SafeAreaView>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderTeamLogo()}

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scrollContainer: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})