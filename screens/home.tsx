import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, Image, TouchableOpacity, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import {Globalstyles} from '.././components/globalstyles'
import { useState } from 'react';
import axios from 'axios';


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Home({navigation}:any)
{
    return(

        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
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

                <View style={Globalstyles.home_estoque}>
                    <View style={Globalstyles.home_link_title}>
                        <Entypo name="box" size={32} color="#14453D" />
                        <Text style={Globalstyles.home_link}>Estoque</Text>  
                    </View>
                    
                    <TouchableOpacity style={Globalstyles.home_button} onPress={() =>navigation.navigate("ListarProdutos")}>
                        <Text style={Globalstyles.home_link}>Gerenciar</Text>
                    </TouchableOpacity>
                </View>

                <View style={Globalstyles.home_usuarios}>
                    <View style={Globalstyles.home_link_title}>
                        <Ionicons name="person" size={32} color="#14453D" />
                        <Text style={Globalstyles.home_link}>Usuarios</Text> 
                    </View>
        
                    <TouchableOpacity style={Globalstyles.home_button}  onPress={() =>navigation.navigate("Usuarios")}> 
                        <Text style={Globalstyles.home_link}>Gerenciar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}