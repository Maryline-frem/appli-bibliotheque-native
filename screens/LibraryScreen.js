import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useFonts } from 'expo-font';

export default function LibraryScreen({navigation}) {

  let [fontsLoaded] = useFonts({
    'DancingScript': require('../assets/fonts/DancingScript-VariableFont_wght.ttf')
  })

  const [books, setBooks] = useState([
  ])

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyD0LW_Vjhj4LTF9A6WwbQLvyCuMNbhCwkY`)
    .then(res => {
      setBooks(res.data.items);
    })
  }, [])

  const [booksFiltered, setBooksFiltered] = useState([])
  console.log(booksFiltered);

  const [inputValue, setInputValue] = useState("")

  const searchBook = () => {
    setBooksFiltered(
      books.filter(
        res => res.volumeInfo.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }

  // const booksJSX = books.map(book => {
  //   return (
  //     <View>
  //       <Text style={styles.bookTitle}>
  //         <AntDesign name="book" size={24} color="black" />
  //         {book.volumeInfo.title}
  //       </Text>
  //     </View>
  //   )
  // })

  function goToBook(book) {
    navigation.navigate('Détails du livre', {
      name: book,
    });
  }



  if(!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  else {
    return (
      <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={books}
            renderItem={({item})=> (
              <ListItem  bottomDivider onPress={() => goToBook(item)}>
              <ListItem.Swipeable
              leftContent={
                <Button
                  title="Info"
                  icon={{ name: 'info', color: 'white' }}
                  buttonStyle={{ minHeight: '100%' }}
                />
              }
              rightContent={
                <Button
                  title="Delete"
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              />
          }></ListItem.Swipeable>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{item.volumeInfo.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
              </ListItem>)
            }
            keyExtractor={item => item.id.toString()}
          />

        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Rechercher un livre"
           onChangeText={(text) => {setInputValue(text)}} />
          <Button title="OK" color="#0CACB7" onPress={searchBook}/>
        </View>              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  list: {
    height: 530
  },
  search: {
    flexDirection: 'row',
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 250
  },
  bookTitle: {
    fontSize: 21,
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'DancingScript'
  }
});
