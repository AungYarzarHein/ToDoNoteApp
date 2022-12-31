import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Preview from "../screens/Preview";
import NewNote from "../screens/NewNote";
import Note from '../screens/Note';



const Stack = createNativeStackNavigator();


const MainRoute = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false,
                animation:"none",
                animationTypeForReplace:"push",
                presentation:"transparentModal"
              }} >
                <Stack.Screen name='home' component={Home}  /> 
                <Stack.Screen name='preview' component={Preview} />
                <Stack.Screen name='newnote' component={NewNote} />
                <Stack.Screen name='note' component={Note} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute;