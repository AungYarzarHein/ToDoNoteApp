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

function ModalCom({visible,closeModal}) {
  const [noteData,setNoteData] = useState({});
  const onChangeHeader = (val) => {setNoteData({...noteData,header:val})};
  const onChangeBody = (val) => {setNoteData({...noteData,body:val})}
  
  const onSave = async () => {
    btnsoundplay();
    try {
      const key = `note${new Date().getTime().toString()}`;
      const jsonValue = JSON.stringify(noteData);
      await AsyncStorage.setItem(key,jsonValue);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const onClose = () => {
    btnsoundplay();
    closeModal();
  }
  return (
    <>
    <Modal visible={visible} animationType="fade" >
      <View style={styles.container}  >
<View style={styles.modalHeader} >
  <TouchableOpacity onPress={onClose} >
   <MaterialIcons name='arrow-back' size={26} color="#111" style={{marginLeft:15}} />
  </TouchableOpacity>
  <TouchableOpacity  onPress={onSave} >
   <MaterialIcons name='save' size={34} color="#111" style={{marginRight:25}} />
  </TouchableOpacity>
</View>
<View style={{flex:1,paddingBottom:20}} >
<TextInput  style={styles.inputHeader} placeholder="Header Text" multiline onChangeText={onChangeHeader}  />
<TextInput  style={styles.inputNote} placeholder="Your note here..." multiline  onChangeText={onChangeBody} spellCheck={false} autoCorrect={false} />
</View>
      </View>

    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
    },
    modalHeader:{
      height:50,
      backgroundColor:"#fff",
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:"center",
      elevation:3
    },
    inputHeader:{
      //borderBottomWidth:.5,
      //borderBottomColor:"lightgrey",
      fontSize:18,
      fontWeight:"700",
      paddingHorizontal:10,
      paddingTop:16
    },
    inputNote:{
      overflow:"scroll",
      paddingHorizontal:10,
      paddingTop:20,
      paddingBottom:30
    },
    bottomBar:{
      height:50,
      backgroundColor:"gold"
    }
  })

export default ModalCom;