import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


type Props = {
active: boolean
name: string
 onPress: () => void
};

const PlayerPositionTypeButton = ({ name, active, onPress }: Props) => {




 return (
  <View style={styles.container}>
   <TouchableOpacity style={[styles.button, active ? { backgroundColor: Colors.MAIN_ORANGE } : { backgroundColor: Colors.GREY }]} activeOpacity={0.6} onPress={onPress}>

   </TouchableOpacity>
   <Text style={styles.text}>{name}</Text>
  </View>
 );
};

export default PlayerPositionTypeButton;

const styles = StyleSheet.create({
 container: {
  marginHorizontal: 3,
 },
 button: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 83,
  height: 44,
  backgroundColor: Colors.GREY,
  borderRadius: 10,
 },
 text: {
  marginTop: 5,
  fontSize: 12,
  color: Colors.DARKGREY,
  textAlign: 'center',
 },
});
