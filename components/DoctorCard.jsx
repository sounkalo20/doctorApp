import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PADDING } from '../outils/constantes'

const DoctorCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.doctorCard}>
        <Image source={item.image}/>
        <Text>{item.nom}</Text>
    </TouchableOpacity>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
    doctorCard : {
        flex: 1,
        flexDirection : 'row',
        backgroundColor: 'white',
        elevation : 5,
        padding : 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical : PADDING.vertical,
        marginBottom: 20,
        borderRadius: 7
    },
    doctorImg: {
        width: 80,
        height: 80,
        borderRadius: 80/2
    }
})