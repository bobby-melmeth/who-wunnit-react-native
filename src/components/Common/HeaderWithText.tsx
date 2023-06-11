import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {FunctionComponent} from 'react';
import BackArrow from '../../../assets/icons/BackArrow';
import TYPOGRAPHY from '../../constants/theme/Typography';
import COLORS from '../../constants/theme/Colors';


type Props = {
  isBackAllowed?: boolean;
  onBackPress?: () => void;
  isRightIconVisible?: boolean;
  onRightIconPress?: () => void;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>
};

const HeaderWithText: FunctionComponent<Props> = ({
  isBackAllowed = false,
  onBackPress,
  isRightIconVisible = false,
  onRightIconPress,
  title,
  containerStyle
}) => {
  return (
    <View style={[styles.header, containerStyle]}>
      {isBackAllowed && (
        <TouchableOpacity onPress={onBackPress} style={styles.backIcon}>
          <BackArrow color={COLORS.BLACK} onPress={onBackPress} style={{marginLeft: 20}}/>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      {isRightIconVisible ? (
        <TouchableOpacity style={styles.rightIconContainer} onPress={onRightIconPress}>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HeaderWithText;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
fontSize: 18,
fontWeight: 'bold',
color: COLORS.BLACK,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 0
  },
  text: {
    ...TYPOGRAPHY.CHAKRA_BOLD_16_WHITE,
    fontSize: 18,
    color: COLORS.BLACK,
    marginTop: -10
  }
})