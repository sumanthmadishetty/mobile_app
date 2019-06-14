import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
    const { data, onPressPlaces } = props;
    alert(data)
    return (
        <View>
            <TouchableOpacity key={index} onPress={() => {onPressPlaces(index)}}>
              <View>
                <Text style={styles.list} key={index}>{item}</Text>
              </View>
            </TouchableOpacity>
        </View>
    );
}

export default listData;