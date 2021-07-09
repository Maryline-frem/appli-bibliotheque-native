import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function BookScreen({route}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={route.params.name.volumeInfo.imageLinks}/>
      <Text style={styles.title}>{route.params.name.volumeInfo.title}</Text>
      <Text style={styles.author}>par {route.params.name.volumeInfo.authors}</Text>
      <Text style={styles.description}>{route.params.name.volumeInfo.description}</Text>
      <Text style={styles.date}>Date de parution : {route.params.name.volumeInfo.publishedDate}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 36,
      textAlign: 'center'
    },
    author: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10
    },
    description: {
      fontSize: 16,
      marginHorizontal: 25,
      marginVertical: 20
    },
    date: {
      fontSize: 16,
      textAlign: 'center'
    }
});