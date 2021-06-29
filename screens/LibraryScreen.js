import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function LibraryScreen({navigation}) {
  const [books, setBooks] = useState([
  // {title: "Harry Potter à l'école des sorciers", description: "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier."},
  // {title: "Harry Potter et l'Ordre du Phénix", description: "Alors qu'il entame sa cinquième année d'études à Poudlard, Harry Potter découvre que la communauté des sorciers ne semble pas croire au retour de Voldemort."},
  // {title: "Martine à l'école", description: "Les vacances sont terminées. La première semaine de classe de Martine est racontée au jour le jour, ainsi que ce qu'elle y apprend."},
  // {title: "Martine à la foire", description: "Chaque année, là où habite Martine, la foire s’installe sur la place du marché. Le manège tourne, les chevaux de bois montent et descendent, crinière au vent."},
  // {title: "Martine à la ferme", description: "Martine rend visite à la ferme de son cousin Jean-Pierre. C'est l'occasion pour elle de découvrir tous ses animaux : les poussins, les lapins, le petit mouton, les oies, le veau et le poulain."},
  // {title: "Cinquante nuances de Grey", description: "Étudiante en littérature anglaise, Anastasia Steele se rend à Seattle dans les bureaux de Christian Grey, jeune homme d'affaires déjà à la tête d'un empire de télécom. "},
  // {title: "Cinquante nuances plus sombres", description: "Lorsque Christian Grey blessé tente de séduire et de reconquérir Ana Steele devenue méfiante, elle exige un nouvel accord avant de lui offrir une seconde chance."},
  // {title: "Cinquante Nuances plus claires", description: "Pensant avoir laissé derrière eux les ombres du passé, les jeunes mariés Christian et Ana profitent pleinement de leur relation tortueuse et partagent une vie de luxe."}
  ])

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&key=AIzaSyD0LW_Vjhj4LTF9A6WwbQLvyCuMNbhCwkY')
    .then(res => {
      setBooks(res.data.items);
    })
  }, [])

  const [booksFiltered, setBooksFiltered] = useState(books)
  console.log(booksFiltered);

  const [inputValue, setInputValue] = useState("")

  const booksJSX = books.map(book => {
    return (
      <View>
        <Text style={styles.bookTitle}>
          <AntDesign name="book" size={24} color="black" />
          {book.volumeInfo.title}
        </Text>
        {/* <Text style={styles.bookDescription}>{book.description} </Text> */}
      </View>
    )
  })

  const searchBook = () => {
    setBooksFiltered(books.filter(res => res.title.toLowerCase().includes(inputValue.toLowerCase())));
  }

  // function goToBook(book) {
  //   navigation.navigate('Book', {
  //     name: book,
  //   });
  // }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Ma bibliothèque</Text> */}

      <ScrollView style={styles.book}>
        {booksJSX}
      </ScrollView>

      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Rechercher un livre"
         onChangeText={(text) => {setInputValue(text)}} />
        <Button title="OK" color="#008A9A" onPress={searchBook}/>
      </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // title: {
  //   fontSize: 40,
  //   marginTop: 25,
  //   marginBottom: 20,
  //   color: '#fff',
  //   backgroundColor: '#008A9A',
  //   paddingHorizontal: 50,
  //   paddingVertical: 20
  // },
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
    marginHorizontal: 20
  },
  bookDescription: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#383838'
  }
});