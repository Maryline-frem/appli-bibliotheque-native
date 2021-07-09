import React from 'react'
import { View, StyleSheet, Image, Button, Text } from 'react-native'

export default function SplashScreen({navigation}) {

  function goBookApp(start) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Mes livres',
        }
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/img/logo.png')}
      />
      <Text style={styles.title}>Book'App</Text>
      <View style={styles.button}>
        <Button
          title="Commencer"
          color="#fff"
          onPress={() => goBookApp('Mes livres')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    img: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 50,
    },
    button: {
        marginTop: 70,
        padding: 5,
        backgroundColor: '#0CACB7',
        borderRadius: 8,
    }
})
