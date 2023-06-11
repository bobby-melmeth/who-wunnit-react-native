import {Dimensions, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import TYPOGRAPHY from '../../constants/theme/Typography';
import COLORS from '../../constants/theme/Colors';

export type TabData = {
  id: number;
  key: string;
  value: string;
};

type Props = {
  data: TabData[];
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onSelect: (selection: TabData) => void;
  selected: TabData;
};

const {width} = Dimensions.get('window');

const SliderTabSmall = ({containerStyle, textStyle, data, onSelect, selected}: Props) => {
  const renderTabs = data.map((d, i) => (
    <TouchableOpacity style={[styles.tab, selected?.id === d.id ? styles.active : styles.inactive]} key={d.key} onPress={() => onSelect(d)}>
      <Text style={[styles.tabText, selected?.id !== d.id && styles.textActive]}>{d.value}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.sliderRowContainer}>{renderTabs}</View>
    </View>
  );
};

export default SliderTabSmall;

const styles = StyleSheet.create({
  container: {},
  sliderRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    paddingVertical: 5,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 2,
  },
  tabText: {
    textAlign: 'center',
    ...TYPOGRAPHY.CHAKRA_BOLD_14_BLACK,
  },
  active: {
    borderBottomColor: COLORS.RED,
  },
  inactive: {
    borderBottomColor: 'white',
  },
  textActive: {
    color: COLORS.DARK_GREY,
  },
});
