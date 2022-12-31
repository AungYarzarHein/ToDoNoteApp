import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {btnsoundplay} from "../screensCom/btnsound";
import ModalCom from './Modal';
import { useCount } from '../screensCom/useCounter';



function Home({navigation}) {
const [openModal,setOpenModal] = useState(false);
const [notes,setNotes] = useState([]);
const [count,addCount,resetCount] = useCount(0);
const scrollY = useRef(new Animated.Value(0)).current;
const diffClamp = Animated.diffClamp(scrollY,0,60)
const translation = diffClamp.interpolate({
    inputRange:[0,60],
    outputRange:[0,-60]
})

const onNavigate = (routeName) => {
  btnsoundplay();
  navigation.navigate(routeName);
}




const getAllData = async () => {
 
  try {
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);
    const arr = data.map((arrItem) => { 
      const obj = JSON.parse(arrItem[1])
      return {...obj,key:arrItem[0]}
    });
    setNotes(arr.reverse())
  } catch (error) {
    console.log(error);
  }
}


useEffect(()=>{
const reloadAndGet = navigation.addListener("focus",()=>{getAllData()})

return reloadAndGet;

},[count,navigation])

  

  return (
    <SafeAreaView style={styles.container} >
<Animated.View style={{
    position:"absolute",
    zIndex:10,
    top:0,
    left:0,
    right:0,
    backgroundColor:"#fff",
    transform:[{translateY:translation}],
    height:60,
    display:"flex",
    elevation:2,
    flexDirection:"row",
    paddingTop:5
}} >

<TouchableOpacity style={styles.title} activeOpacity={0.7}  >
  <Text style={{color:"black",fontSize:24,marginLeft:15,fontWeight:"700"}} >Your Notes</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn}  activeOpacity={0.7}  >

</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={()=>onNavigate("home")} activeOpacity={0.7}  >
<MaterialIcons name='account-circle' size={30} color="#111"  />
</TouchableOpacity>

</Animated.View>

<Animated.ScrollView showsVerticalScrollIndicator={false}
onScroll={Animated.event([
    {nativeEvent:{
        contentOffset:{
            y:scrollY
        }
    }}
],{useNativeDriver:true})}
style={{flex:1,paddingTop:70,paddingHorizontal:5,paddingVertical:5}}
>


{(notes.length) ? notes.map(obj => {
 return (
   <TouchableOpacity style={styles.item} activeOpacity={1} onPress={()=>{navigation.navigate("note",obj)}} key={obj.key} >
<Text style={{color:"#111",fontSize:18}} >
{obj.header}
</Text>
<Text>
{obj.body}
</Text>
</TouchableOpacity>
  
 )
} )  : <ActivityIndicator color="#111" style={{marginTop:80}} />}





<ModalCom visible={openModal} closeModal={()=>{setOpenModal(false),addCount()}} />
</Animated.ScrollView>

<TouchableOpacity  activeOpacity={1} onPress={()=>{btnsoundplay();setOpenModal(true)}} >
<MaterialIcons name='control-point' size={60} color="#fff" style={styles.newItem} />
</TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff"
    },
    contentBody:{
        flex:1,
    },
    btn:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    },
    title:{
      flex:2,
      justifyContent:"flex-start",
      alignItems:"center",
      flexDirection:"row"
    },
    item : {
      paddingVertical:15,
      paddingHorizontal:10,
      borderRadius:3,
      elevation:1,
      marginBottom:5,
      maxHeight:150,
      overflow:"hidden"
    },
    newItem:{
      position:"absolute",
      bottom:30,
      right:20,
      elevation:2,
      backgroundColor:"#111",
      borderRadius:35
    }
  })

export default Home