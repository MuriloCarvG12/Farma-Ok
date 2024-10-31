import { useState, useEffect } from 'react';
import { ImageBackground, Text, View, FlatList, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import axios from 'axios';
import Product_card from '../components/card/Card_produto'


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Listagem_produtos({navigation}:any)
{

    const [produtos, setProdutos] = useState([])

    useEffect(
        () => 
            {
                axios.get('https://16d9-187-183-36-59.ngrok-free.app' + '/products')
                .then((response) => 
                    {
                        const data = response.data
                        setProdutos(data)
                    } 
                    )
            .catch((error) =>
                {
                    Alert.alert('Houve um erro ao buscar os Produtos')
                })
            }, 
        [])
    
    // lista os produtos
    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
                <View style={Globalstyles.list_products_body}>
                    <View style={Globalstyles.list_products_header}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Listagem de Produtos</Text>
                    </View>

                    <FlatList
                    data={produtos}
                    renderItem={({item}:any) => 
                    <Product_card 
                    Name={item.product_name} 
                    image={item.image_url}
                    description={item.description}
                    Quantity={item.quantity}
                    branch_name={item.branch_name}
                    location={item.location}

                    
                    
                    />}


                    
                    />
                    
                </View>

            </ImageBackground>
        </View>
    )
}