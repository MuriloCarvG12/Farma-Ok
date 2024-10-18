import { ImageBackground, Text, View, TextInput, TouchableOpacity, Switch, Image  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '.././globalstyles'


export default function Header()
{
    return (
        <View style={Globalstyles.home_header}>
        <Image
        style={Globalstyles.headerPFP}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
            <Text style={Globalstyles.home_header_text}>Bem Vindo</Text>
            <Text style={Globalstyles.home_header_text}>Teste</Text>
        </View>
    )
}