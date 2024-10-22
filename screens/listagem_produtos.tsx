import { useState, useEffect } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import axios from 'axios';
import Product_card from '../components/card/Card_produto'


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Listagem_produtos({navigation}:any)
{

    const [produtos, setProdutos] = useState([])

    useEffect(() => {}, [])// lista os produtos
    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <View style={Globalstyles.list_products_body}>
                    <View style={Globalstyles.list_products_header}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Eu sou a Tela Listagem</Text>
                    </View>
                    <Product_card 
                    Name= {'ratao da agua'}

                    description= {'droga'}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}