import { ImageBackground, Text, View, TextInput, TouchableOpacity, Switch  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '.././globalstyles'

/**<AntDesign name="car" size={24} color="black" /> */

export default function Card()
{
    return(
    <View style={Globalstyles.Card_body}>
        <View style={Globalstyles.Card_view}>
            <Ionicons name="person" size={32} color="#14453D" />
            <Text style={Globalstyles.Card_text}> Rato </Text>
        </View>
        <View style={Globalstyles.Card_control}>
            <Text style={Globalstyles.Card_control_text}>Controle de Usuario</Text>
            <Switch/> 
        </View>
         

              
    </View>
)
}
