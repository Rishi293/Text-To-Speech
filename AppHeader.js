import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{

  render(){
    return(
      <View style = {styles.background}>
        <Text style = {styles.textStyle}>TEXT-TO-SPEECH CONVERTER</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  background: {
    backgroundColor: "#343148FF",
    flex: 1,
    textAlign: "center"
  },

  textStyle: {
    fontSize: 30,
    color: "#D7C49EFF",
    fontWeight: "bold",
    textShadowOffset: { height: 2, width: -2},
    textShadowColor: "#696667FF",
    textShadowRadius: 3,
    paddingTop: 3,
    paddingBottom: 5
  }

})