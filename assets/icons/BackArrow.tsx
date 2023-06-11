import React, {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconBaseProps} from '../../src/types/IconBaseProps';
import COLORS from '../../src/constants/theme/Colors';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';

interface Props extends IconBaseProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const BackArrow: FunctionComponent<Props> = ({color, style, onPress}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Svg height={24} width={24} fill={color}>
          <Path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default BackArrow;
