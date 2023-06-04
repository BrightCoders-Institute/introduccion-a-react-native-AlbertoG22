/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={ styles.header }>
            <Text style={ styles.text }>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    // height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center'
  }
});
