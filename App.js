import React, { Component } from 'react';
import Sound, { MAIN_BUNDLE } from 'react-native-sound';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

//import components

import Pad from './components/Pad';



Sound.setCategory('Playback');

const soundMap = {
  sound1 : 'a1.wav' ,
  sound2 : 'a2.wav' ,
  sound3 : 'a3.wav' ,
  sound4 : 'a4.wav' ,
  sound5 : 'a5.wav' ,
  sound6 : 'a6.wav'
}

const appSounds ={};


class App extends Component {

  componentDidMount() {
    Object.keys(soundMap).forEach(key => {
      appSounds[key] = this.loadSound(soundMap[key])

    })
  }


  loadSound = (soundName) => {
    return new Sound( soundName , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
  }

  onPressButtonPlay( soundName){
    appSounds[soundName].play();
  }


  render(){

    return (
      <>
        <ScrollView style={styles.body}>
        <Text style={styles.text}> SoundPad App</Text>
        <View style={styles.position}>
          {Object.keys(soundMap).map(( key , index )  => {
            return(
              <Pad key={key} num={ index + 1 } onPressPad = {() => {
                this.onPressButtonPlay(key)
              }} ></Pad>
            )
          })}
        </View>
        </ScrollView>
          
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    fontFamily: '',
  },
  text: {
    color: 'yellow',
    display: 'flex',
    textAlign: "center",
    fontSize: 40,
    margin: 20,
  },
  position: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
