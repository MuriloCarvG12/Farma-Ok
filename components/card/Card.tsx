import { ImageBackground, Text, View,  Switch, Alert  } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 
import {Globalstyles} from '.././globalstyles'
import axios from 'axios';

/**<AntDesign name="car" size={24} color="black" /> */

export default function Card({name, type, status, id}:any)
{
    const [isEnabled, setIsEnabled] = useState(status);
    const [state, setstate] = useState(false)

    let color = '#fff'

    if(isEnabled == true)
        {
            color = 'rgba(255, 255, 255, 0.8)'
        }
    else if(isEnabled == false)
        {
            color = 'rgba(252, 48, 48, 0.8)'
        }

    function user_status()
    {
        setIsEnabled(previousState => !previousState)
        setstate(state => !state)
        if(state == true)
            {
                Alert.alert('Usuário Ativado')
            }
        else
        {
            Alert.alert('Usuário Desativado')
        }
        
        axios.patch('https://16d9-187-183-36-59.ngrok-free.app' + '/users/' + id + '/toggle-status', {
            id: isEnabled 
          })
            .then(response => console.log('Sucesso'))
            .catch(error => console.error('Nao Sucesso'));
         
       
    }

    
    

    return(
    <View style={[Globalstyles.Card_body, {backgroundColor: color}]}>
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
            <Switch
            trackColor={{false: '#43C59E', true: '#43C59E'}}
            thumbColor={isEnabled ? '#3D7068' : '#3D7068'}
            
            onValueChange={user_status}
            value={isEnabled}
        />
        </View>
         

              
    </View>
)
}
