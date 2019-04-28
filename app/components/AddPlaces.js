import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListData from './ListData';

const styles = StyleSheet.create({
  placesContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  addButton: {
    width: '30%',
    alignContent: 'center',
    marginLeft: 10,
  },
  textInput: {
    color: 'white',
    backgroundColor: 'red',
    width: '70%'
  }
})

class AddPlaces extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placesList: [],
      placeName: ''
    }
  }

   onClickAdd = () => {
     const { placesList, placeName } = this.state;
     this.setState((prevState) => ({placesList: prevState.placesList.concat(placeName)}), () => {this.setState({ placeName: '' })})
   }

  render() {
    const { placesList, placeName } = this.state;
    return (
      <View style={{ width: '100%' }}>
      <View style={styles.placesContainer}>
        <TextInput style={styles.textInput} value={placeName} onChangeText={(placeName) => this.setState({ placeName })} />
        <Button disabled={!placeName.length} color=  'blue' style={styles.addButton} title={"Add"} onPress={this.onClickAdd} />
      </View>
      <View>
        <ListData data={placesList} />
      </View>

      </View>
    )
  }
}

export default AddPlaces;