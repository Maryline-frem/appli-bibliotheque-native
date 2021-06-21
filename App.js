import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [books, setBooks] = useState([
    {title: "Harry Potter à l'école des sorciers", description: "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier."},
    {title: "Harry Potter et la Chambre des secrets", description: "L'elfe Dobby a bien tenté d'empêcher Harry de retourner à l'École des Sorciers, frappée d'une terrible malédiction, mais Harry n'est pas près de laisser choir ses amis."},
    {title: "Martine à l'école", description: "Les vacances sont terminées. La première semaine de classe de Martine est racontée au jour le jour, ainsi que ce qu'elle y apprend."},
    {title: "Martine à la foire", description: "Chaque année, là où habite Martine, la foire s’installe sur la place du marché. Le manège tourne, les chevaux de bois montent et descendent, crinière au vent."},
    {title: "Martine à la ferme", description: "Martine rend visite à la ferme de son cousin Jean-Pierre. C'est l'occasion pour elle de découvrir tous ses animaux : les poussins, les lapins, le petit mouton, les oies, le veau et le poulain."},
    {title: "Cinquante nuances de Grey", description: "Étudiante en littérature anglaise, Anastasia Steele se rend à Seattle dans les bureaux de Christian Grey, jeune homme d'affaires déjà à la tête d'un empire de télécom. "},
    {title: "Cinquante nuances plus sombres", description: "Lorsque Christian Grey blessé tente de séduire et de reconquérir Ana Steele devenue méfiante, elle exige un nouvel accord avant de lui offrir une seconde chance."},
    {title: "Cinquante Nuances plus claires", description: "Pensant avoir laissé derrière eux les ombres du passé, les jeunes mariés Christian et Ana profitent pleinement de leur relation tortueuse et partagent une vie de luxe."}
  ])

  const booksJSX = books.map(book => {
    return <Text>{book.title}, {book.description} </Text>
  })

  function searchTitle() {
    console.log('recherche');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma bibliothèque</Text>

      <View style={styles.book}>
        {booksJSX}
      </View>

      <View style={styles.recherche}>
        <TextInput value={books}
         onChangeText={(text) => {setBooks(text)}} />
        <Button title="OK" color="pink" onPress={searchTitle}/>
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
  title: {
    fontSize: 20
  }
});
