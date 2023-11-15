import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Conversation = ({route ,navigation}) => {
    const {item} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title : item.nom
        })
    })
  return (
    <View>
      <Text>Conversation</Text>
    </View>
  )
}

export default Conversation

const styles = StyleSheet.create({})