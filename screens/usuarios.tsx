import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, FlatList , TouchableOpacity, Alert , Switch } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import {Globalstyles} from '.././components/globalstyles'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '.././components/card/Card'
import Header from '.././components/header/Header'

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Usuarios({navigation , route}:any)
{
    const [users, setUsers] = useState([])

    

    useEffect(() => 
        {
            axios
            .get('https://16d9-187-183-36-59.ngrok-free.app' + '/users', {
            })
            .then((response) => {
              setUsers(response.data)
          })
          .catch(() => {
              Alert.alert('Ocorreu um Erro!')
          })  
        }, [])
   

    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                
                <FlatList
                data={users}
                renderItem={({item}:any) => {
                    
                return(
                <>
                <Card 
                name={item.name} 
                type={item.profile}
                status={item.status}
                id={item.id}
                />
                
                

                </>
                )}}
                


                
                />
                    <TouchableOpacity style={Globalstyles.users_button} onPress={() => navigation.navigate("CadastrarUsuarios")}>
                        <Text style={Globalstyles.home_link}>Cadastrar Usuário</Text>
                    </TouchableOpacity>
                

            </ImageBackground>
        </View>

    )
}