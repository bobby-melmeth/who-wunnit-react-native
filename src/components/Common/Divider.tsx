import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import COLORS from '../../constants/theme/Colors';


type Props = {
  style?: StyleProp<ViewStyle>;
};

const Divider = (props: Props) => {
  return <View style={[styles.divider, props.style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: COLORS.LIGHT_GREY,
    alignSelf: 'center',
    width: '100%',
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 5,
  },
});