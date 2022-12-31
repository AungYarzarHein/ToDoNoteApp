import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

function Preview({navigation}) {

  const onNavigate = (routeName) => {
    navigation.navigate(routeName);
  }
  return (
    <View style={styles.container} >
      <View style={styles.header} >
<TouchableOpacity style={styles.btn} onPress={()=>onNavigate("home")} activeOpacity={0.7} >
  <MaterialIcons name='home' size={30} color="#111"  />
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={()=>onNavigate("preview")} activeOpacity={0.7}  >
<MaterialIcons name='child-care' size={30} color="#111"  />
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={()=>onNavigate("home")} activeOpacity={0.7}  >
<MaterialIcons name='account-circle' size={30} color="#111"  />
</TouchableOpacity>
      </View>

      <Text>
        Preview
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff"
    },
    header:{
    height:60,
    display:"flex",
    backgroundColor:"#fff",
    flexDirection:"row",
    paddingTop:5
    },
    btn:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    }
  })

export default Preview