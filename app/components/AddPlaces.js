import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListData from './ListData';
import ListData from './ListPlaces';

const styles = StyleSheet.create({
  placesContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  addButton: {
    width: '30%',
    alignContent: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    // backgroundColor: 'red',
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
     this.setState((prevState) => ({placesList: prevState.placesList.concat({ id: Math.random(), name: placeName, Image: ""})}), () => {this.setState({ placeName: '' })})
   }

   removePlace = (i) => {
     this.setState(state => ({ placesList: state.placesList.filter((place) => place.id !== i ) }))
   }

  render() {
    const { placesList, placeName } = this.state;
    return (
      <View style={{ width: '100%' }}>
      <View style={styles.placesContainer}>
        <TextInput style={styles.textInput} value={placeName} onChangeText={(placeName) => this.setState({ placeName })} />
        <Button disabled={!placeName.length} color=  'blue' style={styles.addButton} title={"Add Place"} onPress={this.onClickAdd} />
      </View>
      <View>
      <FlatList data={placesList} renderItem={(item) => <ListData data={item} />} />
        {/* <ListData data={placesList} onPressPlaces={this.removePlace} /> */}
      </View>

      </View>
    )
  }
}

export default AddPlaces;