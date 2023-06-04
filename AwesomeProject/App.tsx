/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Header } from './components/Header';
// import {uuid} from 'uuidv4';

export const App = () => {

  const [items, setItems] = useState([
    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Eggs' },
    { id: Math.random(), text: 'Bread' },
    { id: Math.random(), text: 'Juice' },
  ]);

  return (
    <View style={ styles.container }>
      <Header />
      <FlatList
        data={items}
        renderItem={ ({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60
  },
});
