import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Speech from 'expo-speech';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      word: '',
      isStatic: true
    }
  }

  
  render(){
    return(
      <View>
        <AppHeader />
        <View style = {[styles.line, {marginTop: 60}]}/>
        
        <TextInput style = {styles.inputBox}
        onChangeText = {(text)=>{
          this.setState({ word: text });
        }}/>

        <TouchableOpacity style = {styles.speakButton}
        onPress = {()=>{
           var speakWord = this.state.word;

           if(this.state.word === ''){
             alert("Type Something")
             }
           else{
              Speech.speak(speakWord)
              this.setState({ isStatic: false }) 
              }
        }}>
        <Text style = {styles.speakText}>Speak</Text>
        </TouchableOpacity>

        {this.static()};

        <Image style = {
          this.state.isStatic === true ?
          [styles.speakImage, {display: "none"}]
          : [styles.speakImage]
        } 
        source = {require('./assets/soundGif.gif')} />     
    
      <View style = {styles.line}/>
      <View style = {{width: "100%", height: 30}}/> 
      </View>
    );
  }


  static = ()=>{
    return (
      <View>
      <View style = { this.state.isStatic === true ?
          {backgroundColor: "black", width: 200, height: 200, alignSelf: "center", marginBottom: 95}
          : {display: "none"}
          }/>
        <View style = { this.state.isStatic === true ?
          [styles.soundLine, {marginTop: -203, marginLeft: 114}]
          : {display: "none"}}/>
        <View style = { this.state.isStatic === true ?
          [styles.soundLine, {marginLeft: 123}]
          : {display: "none"} 
        }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 132}]
          : {display : "none"}
          }/>
          <View style = { this.state.isStatic === true  ?
          [styles.soundLine, { marginLeft: 141}]
          : {display : "none"}
          }/>
          <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 150}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 159}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 168}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 177}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 186}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 195}]
          : {display : "none"}
          }/>
        <View style = { this.state.isStatic === true  ?
          [styles.soundLine, {marginLeft: 204}]
          : {display : "none"}
          }/>
          </View>
    )
  }


}

const styles = StyleSheet.create({

  inputBox: {
    width: 200,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 60,
    textAlign: "center",
    backgroundColor: "#D3D0E7"
  },

  speakButton: {
    width: 150,
    borderColor: "black",
    borderWidth: 2,
    height: 30,
    alignSelf: "center",
    marginBottom: 60,
    shadowColor: "#696667FF",
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 3
  },

  speakImage: {
    width: 200,
    alignSelf: "center",
    height: 200, 
    marginBottom: -88
  },
  
  speakText: {
    alignSelf: "center",
    fontSize: 17,
    paddingTop: 3
  },

  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#000000",
    marginTop: 160,
    marginBottom: 40
  },

  soundLine: {
    backgroundColor: "white", 
    width: 5, 
    height: 20, 
    marginTop: -20
  }

})