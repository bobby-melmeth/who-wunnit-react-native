import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent, useEffect } from 'react'

import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, SharedValue } from 'react-native-reanimated';
import COLORS from '../constants/theme/Colors';
const SCREEN = Dimensions.get('screen');
const PROGRESS_BAR_WIDTH = SCREEN.width * 0.7;
type Props = {
  progress: SharedValue<number>;
};

const ProgressBar: FunctionComponent<Props> = ({
  progress
}) => {

  useEffect(() => {
    progress.value = withTiming(PROGRESS_BAR_WIDTH, { duration: 3000 });
  }, []);

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: progress.value
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, progressStyle]} />
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        width: SCREEN.width * 0.7,
        backgroundColor: COLORS.GREY,
        height: 10,
        borderRadius: 1
    },
    bar: {
      height: 10,
      width: 100,
      backgroundColor: COLORS.RED,
      borderTopLeftRadius: 1,
      borderBottomLeftRadius: 1
    }
})