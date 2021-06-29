import React from 'react'
import { View, StyleSheet, Image, Button, Text } from 'react-native'

export default function SplashScreen({navigation}) {

    function goBookApp(start) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Library',
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
            <Button
                style={styles.button}
                title="Commencer"
                color="#008A9A"
                onPress={() => goBookApp('Library')}
            />
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
        padding: 20
    }
})
