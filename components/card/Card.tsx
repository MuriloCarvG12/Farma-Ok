import { ImageBackground, Text, View, TextInput, TouchableOpacity, Switch  } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 
import {Globalstyles} from '.././globalstyles'

/**<AntDesign name="car" size={24} color="black" /> */

export default function Card({name, type}:any)
{
    return(
    <View style={Globalstyles.Card_body}>
        <View style={Globalstyles.Card_view}>
            
            {  
            
            type === 'filial' 
            ? <MaterialCommunityIcons name="store" size={32} color="#14453D" /> 
            : <Ionicons name="car" size={32} color="#14453D" />
                    

                    
                    
                    
                
            
            }
            
                    
            
            <Text style={Globalstyles.Card_text}> {name} </Text>
        </View>
        <View style={Globalstyles.Card_control}>
            <Text style={Globalstyles.Card_control_text}>Controle de Usuario</Text>
            <Switch/> 
        </View>
         

              
    </View>
)
}
