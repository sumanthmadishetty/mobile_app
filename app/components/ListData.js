import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput } from 'react-native';

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
    const { data = [] } = props;
    return (
        <View>
          {data.map((item, index) => <Text style={styles.list} key={index}>{item}</Text>)}            
        </View>
    );
}

export default listData;