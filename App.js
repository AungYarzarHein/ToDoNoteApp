import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  PermissionsAndroid
} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import MainRoute from './routes/MainRoute';
import {loadSound} from "./screensCom/btnsound";


function App() {

  
useEffect(()=>{
  SplashScreen.hide();
  loadSound();
},[])

  return (
   <View style={styles.container} >
    <StatusBar backgroundColor="#fff" />
   <MainRoute />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App