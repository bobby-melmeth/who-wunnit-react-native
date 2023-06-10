import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { User } from '../../types/User'


type Props = {
    user: User,
    onPress: () => void
}

const UserCard = ({user, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default UserCard

const styles = StyleSheet.create({})