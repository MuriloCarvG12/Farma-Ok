import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert, FlatList, ScrollView  } from 'react-native';
import { Globalstyles } from '../components/globalstyles';
import Card_motorista from '../components/card/Card_motorista';
import Product_card from '../components/card/Card_produto';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Tela_motorista({})
{
    const [list_produts, get_list_produts] = useState([])

    useEffect(() => {
        axios.get('https://06e8-187-183-36-59.ngrok-free.app' + '/movements')

        .then((response) => 
            {
                const data = response.data
                get_list_produts(data)
                
            } 
            )
    .catch((error) =>
        {
            Alert.alert('Houve um erro ao buscar os Produtos')
        })
    }, 
[])
    


    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
            <View style={Globalstyles.list_products_body}>
            <View style={Globalstyles.home_header}>
                <Ionicons name="person" size={32} color="#14453D" />
                <Text style={Globalstyles.home_header_text}>Bem Vindo</Text>
                <Text style={Globalstyles.home_header_text}>Motorista</Text>
            </View>
            
            <FlatList 
            data={list_produts}
            renderItem={({item}:any) => <Card_motorista
            Name = {item.produto.nome}
            Quantity = {item.quantidade} 
            Start_Location = {item.origem.nome}
            Destination_Location = {item.destino.nome}
            Status = {item.status}
            History = {item.historico}
            Id = {item.id}
            
            />}
            />
             
            </View>
            </ImageBackground>
        </View>
    )
}