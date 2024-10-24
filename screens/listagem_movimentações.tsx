import { useState, useEffect } from 'react';
import { ImageBackground, Text, View, FlatList, Alert, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import axios from 'axios';
import Product_card from '../components/card/Card_produto'


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Lista_movimentacoes({navigation}:any)
{
    const [movements, set_movements] = useState([])

    useEffect(
        () => 
        {
             axios.get('')
             .then((response) => 
                {
                    const data = response.data
                    set_movements(data)
                } 
                )
             .catch((error) => 
                {
                    
                    console.log(error)
                })

        }, 
    [])

    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <View style={Globalstyles.list_moviments_header}>
                    <Text style={Globalstyles.list_moviments_header_text}>Listagem de Movimentações</Text>
                </View>

                
                <TouchableOpacity style={Globalstyles.users_button} onPress={() => navigation.navigate("CadastroMovimentacoes")}>
                        <Text style={Globalstyles.home_link}>Cadastrar Usuário</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}