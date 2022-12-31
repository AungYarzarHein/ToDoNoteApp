import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"


function NewNote({navigation}) {
  return (
    <View style={styles.container} >
New Note
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:StatusBar.currentHeight,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#ffffef"
    }
  })

export default NewNote