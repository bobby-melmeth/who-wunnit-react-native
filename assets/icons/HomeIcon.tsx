import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

import COLORS from '../../src/constants/theme/Colors';
import { IconBaseProps } from '../../src/types/IconBaseProps';

interface Props extends IconBaseProps {
  active: boolean
}

const HomeIcon: FunctionComponent<Props> = ({
    active = false,
    ...props
}) => {
  return (
    <Svg  height={24} width={24} fill={ active ? COLORS.RED : COLORS.DARK_GREY } {...props}>
    <Path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Zm2-2h2v-7h8v7h2v-9l-6-4.5L6 10Zm6-6.75Z" />
  </Svg>
  )
};

export default HomeIcon;