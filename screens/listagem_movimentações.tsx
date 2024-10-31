import { useState, useEffect } from 'react';
import { ImageBackground, Text, View, FlatList, Alert, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import axios from 'axios';
import Movement_card from '../components/card/Card_movements';
import { useIsFocused } from '@react-navigation/native';







const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Lista_movimentacoes({navigation}:any)
{
    const isFocused = useIsFocused();
    const [movements, set_movements] = useState([])

    useEffect(
        () => 
        {
            if(isFocused)
                {
                    handle_movement()
                }
        }, 
    [isFocused])

    function handle_movement()
    {
        axios.get('https://16d9-187-183-36-59.ngrok-free.app' + '/movements')
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
    }



    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <View style={Globalstyles.list_moviments_header}>
                    <Text style={Globalstyles.list_moviments_header_text}>Listagem de Movimentações</Text>
                </View>

                <FlatList
                    data={movements}
                    renderItem={({item}:any) => 
                    <Movement_card 
                    image={item.produto.imagem}
                    Name={item.origem.nome}
                    farm_origin={item.origem.nome}
                    farm_destiny={item.destino.nome}
                    product={item.produto.nome}
                    status={item.status}
                    quantity={item.quantidade}

                    />}
                    />
                
                <TouchableOpacity style={Globalstyles.users_button} onPress={() => navigation.navigate("CadastroMovimentacoes")}>
                        <Text style={Globalstyles.home_link}>Cadastrar Movimento</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}