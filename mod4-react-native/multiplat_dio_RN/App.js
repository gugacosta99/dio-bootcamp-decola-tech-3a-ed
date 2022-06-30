import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  VirtualizedList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
//<Icon name="linkedin" size={60}></Icon>

import photo from './src/assets/107887392.jpg';
import Card from './src/components/cards';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitle}>
        <Image source={photo} style={styles.photo}></Image>

        <Text style={styles.name}>GUSTAVO COSTA</Text>
        <Text style={styles.job}>Software Engineer</Text>

        <View style={styles.social}>
          <Icon name="github" size={30}></Icon>
          <Icon name="facebook" size={30}></Icon>
          <Icon name="linkedin" size={30}></Icon>
        </View>
      </View>

      <Card titulo="Formação Acadêmica">
        <Text style={styles.text_in}>UFPE</Text>
        <Text style={styles.text_in}>UNINASSAU</Text>
        <Text style={styles.text_in}>SENAI</Text>
      </Card>
      <Card titulo="Experiência Profissional">
        <Text style={styles.text_in}>IC</Text>
        <Text style={styles.text_in}>ASES BANCA DE ESTUDOS</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    padding: 25,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  sectionTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    fontSize: 26,
    marginTop: 10,
    fontWeight: 'bold',
  },
  job: {
    color: 'black',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '400',
  },
  social: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  text_in: {
    color: 'black',
    fontSize: 18,
  },
});

export default App;
