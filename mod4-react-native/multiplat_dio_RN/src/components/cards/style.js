import React from "react";
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

const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    text_in: {
      color: 'black',
      fontSize: 18,
    },
    card: {
      alignItems: 'center',
      marginTop: 20,
    },
    card_head: {
      alignItems: 'center',
      width: '80%',
      borderRadius: 5,
      borderColor: '#939393',
      borderWidth: 5,
      padding: 5,
    },
    card_content: {
      width: '80%',
      borderRadius: 5,
      borderColor: '#939393',
      borderWidth: 5,
      padding: 5,
    },
  });

export default styles;