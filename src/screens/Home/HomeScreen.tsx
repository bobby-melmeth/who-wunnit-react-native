import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../../services/userservice'
import { User } from '../../types/User'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserCard from '../../components/UserCard'



const HomeScreen = () => {
const [user, setUser] = useState<User | null>(null)
const [allUsers, setAllUsers] = useState<User[] | null>(null)
const [email, setEmail] = useState<string>('')
const [name, setName] = useState<string>('')

const getSignedInUser = async () => {
  try {
    const res = await getUser('1')
    setUser(res)

  } catch (error) {
    throw error
  }
}

const createNewUser = async () => {
  try {
    const res = await createUser(email, name)
    console.log('createdUser res', JSON.stringify(res, null, 2))
  } catch (error) {
    console.log(error)
  }
}

const updateTheUser = async () => {
  try {
    const data = await updateUser('1', email, name)
  } catch (error) {
console.log(error)
  }
}

const getAllUsers = async () => {
  try {
    const res = await getUsers()
    setAllUsers(res)
  } catch (error) {
console.log(error)
  }
}

const deleteSelectedUser = async (id: string) => {
  try {
    const res = await deleteUser(id)
  } catch (error) {

  }
}

useEffect(() => {
  getSignedInUser()
  getAllUsers()
}, [])

const renderUsersCard = () => {
return allUsers?.map((user) => {
  return (
    <UserCard user={user} onPress={() => deleteSelectedUser(user.id)}/>
  )
})
}

  return (
    <SafeAreaView>
    <View>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.id}</Text>
    </View>
    <View style={{}}>
      <TextInput placeholder="email" style={{marginVertical: 10, backgroundColor: 'red', paddingVertical: 10}} onChangeText={(a) => setEmail(a)}/>
      <TextInput placeholder="password" style={{marginVertical: 10, backgroundColor: 'blue', paddingVertical: 10}} onChangeText={(b) => setName(b)}/>
    <Button onPress={createNewUser} title='create user' />
    </View>
    <Button onPress={updateTheUser} title='update user' />

    <View>
      {renderUsersCard()}
    </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})