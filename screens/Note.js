import React,{useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {btnsoundplay} from "../screensCom/btnsound";


function Note({route,navigation}) {
  const {header,body,key} = route.params;
  const [noteData,setNoteData] = useState({header,body});
  const onChangeHeader = (val) => {setNoteData({...noteData,header:val})};
  const onChangeBody = (val) => {setNoteData({...noteData,body:val})}

  const onSave = async () => {
    try {
      const jsonValue = JSON.stringify(noteData);
      await AsyncStorage.setItem(key,jsonValue);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <View style={styles.container} >
<View style={styles.header} >
<TouchableOpacity onPress={()=>{btnsoundplay();navigation.goBack()}} >
   <MaterialIcons name='arrow-back' size={26} color="#111" style={{marginLeft:15}} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onSave}  >
   <MaterialIcons name='save' size={34} color="#111" style={{marginRight:25}} />
  </TouchableOpacity>
</View>

<View style={{flex:1,paddingBottom:20}} >
<TextInput  style={styles.inputHeader} placeholder="Header Text" multiline value={noteData.header} onChangeText={onChangeHeader}  />
<TextInput  style={styles.inputNote} placeholder="Your note here..." multiline  value={noteData.body} onChangeText={onChangeBody} spellCheck={false} autoCorrect={false} />
</View>
  </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  header:{
      height:50,
      backgroundColor:"#fff",
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:"center",
      elevation:3
  },
  inputHeader:{
    fontSize:18,
    fontWeight:"700",
    paddingHorizontal:10
  },
  inputNote:{
    fontSize:16,
    overflow:"scroll",
    paddingHorizontal:10,
    paddingTop:20,
    paddingBottom:30
  }
})

export default Note;