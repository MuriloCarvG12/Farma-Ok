import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import { useState } from 'react';
import axios from 'axios';

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Listagem_produtos({navigation}:any)
{
    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <View>
                    <Text>Eu sou a Tela Listagem</Text>

                </View>
            </ImageBackground>
        </View>
    )
}