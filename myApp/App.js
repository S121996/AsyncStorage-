import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {

  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem("user", "Sumit Bhargava")
  }
  const getData = async () => {
    const name = await AsyncStorage.getItem("user")
    setUser(name);
  }

  const removeData = async () => {
    await AsyncStorage.removeItem("user")
    setUser('')
  }
  // const clearData = async () => {
  //   await AsyncStorage.clearItem("user")
  //   setUser('')
  // }

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 40 }}>AsyncStorage |{user} </Text>
      <Button title='Set Data' onPress={setData} />
      <Button title='Get Data' onPress={getData} />
      <Button title='Remove Data' onPress={removeData} />
      {/* <Button title='clear Data' onPress={clearData} /> */}

    </View>
  )
}

export default App