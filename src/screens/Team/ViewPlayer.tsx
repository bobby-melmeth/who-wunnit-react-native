import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TeamStackParamList } from '../../navigation/TeamStackNavigator'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { getPlayer, getPlayerMatches } from '../../services/playerservice'
import { PlayerFull, PlayerMatches } from '../../types/Player'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackArrow from '../../../assets/icons/BackArrow'
import COLORS from '../../constants/theme/Colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HeaderWithText from '../../components/Common/HeaderWithText'

type NavigationList = NativeStackNavigationProp<TeamStackParamList>

const ViewPlayer = () => {
  const navigation = useNavigation<NavigationList>()
  const { params } = useRoute<RouteProp<TeamStackParamList, 'ViewPlayer'>>()
  const [player, setPlayer] = useState<PlayerFull | undefined>()
  const [playerMatches, setPlayerMatches] = useState<PlayerMatches | undefined>()

  useEffect(() => {
    getPlayers()
    getPlayerMatchData()
  }, [])

  async function getPlayers() {
    try {
      const data = await getPlayer(params.player.id)
      setPlayer(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getPlayerMatchData() {
    try {
      const data = await getPlayerMatches(params.player.id, 10)
      setPlayerMatches(data)
      console.log('MATCHDATA', JSON.stringify(data, null, 2))
    } catch (error) {
      console.log(error)
    }
  }

  const renderPlayerInvolvedComps = () => {
    if (!player?.currentTeam.runningCompetitions) return
    return player?.currentTeam.runningCompetitions.map((comp, index) => (
      <View key={index} style={{ alignItems: 'center' }}>

        <Image source={{ uri: comp.emblem }} style={styles.compImage} />
      </View>
    ))
  }




  console.log('PPPPLPLFPLDFPDLF', JSON.stringify(player, null, 2))

  console.log('VPPARAMS', params)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <HeaderWithText title={player?.name} isBackAllowed onBackPress={() => navigation.goBack()} />
        <Image source={require('../../../assets/images/defaultpic.png')} style={styles.playerImage} />
        <View style={{alignItems: 'flex-start', justifyContent: 'space-around', marginLeft: 30, width: 400}}>
          <Text style={styles.name}>Goals: {playerMatches?.aggregations.goals}</Text>
          <Text style={styles.name}>Assists: {playerMatches?.aggregations.assists}</Text>
          <Text style={styles.name}>Penalties: {playerMatches?.aggregations.penalties}</Text>
          <Text style={styles.name}>Red Cards: {playerMatches?.aggregations.redCards}</Text>
          <Text style={styles.name}>Yellow Cards: {playerMatches?.aggregations.yellowCards}</Text>
          <Text style={styles.name}>Starts: {playerMatches?.aggregations.startingXI}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', marginTop: 20}}>
          {renderPlayerInvolvedComps()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playerImage: {
    width: 200,
    height: 350,
    alignSelf: 'center',
  },
  name: {
    fontSize: 35,
    marginTop: 10
  },
  compImage: {
    height: 70,
    width: 70
  }
})