import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar'
import { useSharedValue } from 'react-native-reanimated';
import { CommonActions, useNavigation } from '@react-navigation/native';
import asyncTimeout from '../../utils/AsyncTimeout';

const SplashScreen = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(0);

  useEffect(() => {
    setupInitialData();
  }, []);



  const setupInitialData = async () => {
    try {
      asyncTimeout(3000).then(() => {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [
            { name: 'MainTabNavigator' }
          ]
        }))
      });
    } catch (err) {
      console.log('error when getting current user data');
      console.log(err);

    }
  };


  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.image} />
        <ProgressBar progress={progress} />
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5B52FF'
  },
  image: {
    width: 100,
    height: 200,
    alignSelf: 'center',
  }
})