import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TeamStackParamList } from '../../navigation/TeamStackNavigator';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { getSquad } from '../../services/teamservice';
import PlayerCard from '../../components/Cards/PlayerCard';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { PLAYER_POSITION_TYPE } from '../../utils/Arrays';
import { TabData } from '../../components/Common/SliderTab';
import { Player } from '../../types/Player';
import COLORS from '../../constants/theme/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PlayerSkeleton from '../../components/Skeletons/PlayerSkeleton';
import BackArrow from '../../../assets/icons/BackArrow';

type NavigationList = NativeStackNavigationProp<TeamStackParamList>;

const ViewTeam = () => {

  const { params } = useRoute<RouteProp<TeamStackParamList, 'ViewTeam'>>();
  const navigation = useNavigation<NavigationList>();
  const [squad, setSquad] = useState<Player[]>([])
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(true);
  // const [filteredSquad, setFilteredSquad] = useState<Player[]>(squad);
  const [selectedTab, setSelectedTab] = useState<TabData | null>(null);

  useEffect(() => {
    getTeamSquad()
  }, [])

  async function getTeamSquad() {
    setIsLoading(true)
    try {
      const data = await getSquad(params.team.id)
      setSquad(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }



  const renderItem = ({ item }: { item: Player }) => (
    <View>
      <PlayerCard
        key={item.id}
        name={item.name}
        nationality={item.nationality}
        position={item.position}
        onPress={() => navigation.navigate('ViewPlayer', { player: item })}
      />
    </View>
  );

  const handleTabPress = (tab: TabData) => {
    if (selectedTab === tab) {
      // Pressed the already selected tab, so unselect it
      setSelectedTab(null);
    } else {
      // Pressed a different tab, so select it
      setSelectedTab(tab);
    }
  };






  const getTabStyle = (index: number) => {
    if(!selectedTab) return;
    const mappedTitles = PLAYER_POSITION_TYPE?.map((tab, index) => tab);
    const selectedIndex = mappedTitles?.indexOf(selectedTab);
    if (index === selectedIndex) return [styles.selectedTabContainer];
  };

  const getTabTextStyle = (index: number) => {
    if(!selectedTab) return;

    const mappedTitles = PLAYER_POSITION_TYPE?.map((tab, index) => tab.value);
    const selectedIndex = mappedTitles?.indexOf(selectedTab.value);
    if (index === selectedIndex) return [styles.selectedTabText];
  };

  const renderTabs = () => {
    return PLAYER_POSITION_TYPE.map((tab, index) => (
      <TouchableOpacity key={index} onPress={() => handleTabPress(tab)}>
      <View
          key={index}
          style={[
            styles.tabContainer,
            {marginHorizontal: index === 0 ? 15 : 0}, getTabStyle(index),
          ]}>
          <Text style={[styles.tabText, getTabTextStyle(index)]}>{tab.value}</Text>
        </View>
      </TouchableOpacity>
    ));
  };


  // const renderPlayers: React.FC<> = () => {}



const filteredSquad = selectedTab ? squad.filter((player) => player.position === selectedTab.value) : squad;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <BackArrow color={COLORS.BLACK} onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', marginLeft: 20}} />
        <Image source={{ uri: params.team.crest }} style={styles.image} />
        <View style={styles.buttonContainer}>{renderTabs()}</View>
        <View style={styles.flatListContainer}>
          {isLoading ? (
            <FlatList
              data={[...Array(10).keys()]} // Array to render 10 skeleton items
              keyExtractor={(item) => item.toString()}
              renderItem={() => <PlayerSkeleton rows={10} />}
              contentContainerStyle={styles.contentContainer}
              numColumns={3}

            />
          ) : (
            <FlatList
              data={selectedTab === null ? squad : filteredSquad}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.contentContainer}
              numColumns={3}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ViewTeam

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,

  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  tabContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    marginRight: 8,
    marginTop: 10,
    marginBottom: 25,
    borderWidth: 0.5,
  },
  selectedTabContainer: {
    backgroundColor: COLORS.RED,
  },
  selectedTabText: {
    color: 'white',
  },
  tabText: {

    fontSize: 14,
  },

  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },

  flatListContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flex: 1 / 3, // Adjust this value as needed for the desired layout
    // Additional item container styles
  },

})