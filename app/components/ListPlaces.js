import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ListData } from '.';

const styles = StyleSheet.create({
  lisData: {
  },
  textInput: {
    color: 'white'
  },
  list: {
    marginBottom: 5,
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: '#eee',

  }
})


const listData = (props) => {
    const { data = [], onPressPlaces } = props;
    return (
      <View>
        <FlatList data={placesList} renderItem=((item) => <ListData  />) />
      </View>
    );
}

export default listData;