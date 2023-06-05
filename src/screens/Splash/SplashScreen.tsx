import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import { useSharedValue } from 'react-native-reanimated';

const SplashScreen = () => {

  const progress = useSharedValue(0);

  return (
    <View style={styles.container}>
      <View style={{ }}>
       <ProgressBar progress={progress}/>
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
    }
})