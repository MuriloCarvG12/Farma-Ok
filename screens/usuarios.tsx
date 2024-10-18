import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, Image, TouchableOpacity, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import {Globalstyles} from '.././components/globalstyles'
import { useState } from 'react';
import axios from 'axios';
import Card from '.././components/card/Card'
import Header from '.././components/header/Header'

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Usuarios()
{
    const [users, setUsers] = useState([])

    function handle_login()
    {
      axios
      .get('https://0955-187-183-36-59.ngrok-free.app/users', {
      })
      .then((response) => {
        setUsers(response.data)
    })
    .catch(() => {
        Alert.alert('Ocorreu um Erro!')
    })
    }

    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <Header/>
                    
                <Card />
            </ImageBackground>
        </View>

    )
}