import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, TouchableOpacity, Alert, FlatList, Image  } from 'react-native';
import { Globalstyles } from '../components/globalstyles';
import Card_motorista from '../components/card/Card_motorista';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Tela_motorista({navigation, route}:any)
{

   const {user_name} = route.params
    const [list_products, set_list_products] = useState([])

    function load_page()
  {
    axios.get('https://16d9-187-183-36-59.ngrok-free.app' + '/movements')

        .then((response) => 
            {
                const data = response.data
                set_list_products(data)
                                           
            } 
            )
    .catch((error) =>
        {
            Alert.alert('Houve um erro ao buscar os Produtos')
        })  
  }

    useEffect(() => {
        load_page()
        
    }, 
[])

//envia o form-data para a rota start
async function getImageCamera(ID:any) {
    

    // pedir permissão
    const permission = await ImagePicker.requestCameraPermissionsAsync()

    // verifica se deu permisao
    if (permission.granted) {

      // abre camera e tira foto
      const imageInCamera = await ImagePicker.launchCameraAsync()

      // verifica se tirou uma foto
      if (imageInCamera?.assets) {

        const body = new FormData()
        body.append("file", {
          uri: imageInCamera.assets[0].uri,
          type: imageInCamera.assets[0].mimeType,
          name: imageInCamera.assets[0].fileName
        })

        body.append("motorista", user_name)

        axios.put('https://16d9-187-183-36-59.ngrok-free.app' + '/movements/' + ID + '/start', body, {
          headers: {
            "Content-Type": 'multipart/form-data'
          }
        })
        // inicia a função para buscar e atualizar o list_products
        load_page()
        
        
      }
    }
  }

  //envia o form-data para a rota end
  async function getImageCameraDestination(ID:any) {
    

    // pedir permissão
    const permission = await ImagePicker.requestCameraPermissionsAsync()

    // verifica se deu permisao
    if (permission.granted) {

      // abre camera e tira foto
      const imageInCamera = await ImagePicker.launchCameraAsync()

      // verifica se tirou uma foto
      if (imageInCamera?.assets) {

        const body = new FormData()
        body.append("file", {
          uri: imageInCamera.assets[0].uri,
          type: imageInCamera.assets[0].mimeType,
          name: imageInCamera.assets[0].fileName
        })

        body.append("motorista", user_name)

        axios.put('https://16d9-187-183-36-59.ngrok-free.app' + '/movements/' + ID + '/end', body, {
          headers: {
            "Content-Type": 'multipart/form-data'
          }
        })
        // inicia a função para buscar e atualizar o list_products
        load_page()
        
      }
    }
  }
    
  
  
    

    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
            <View style={Globalstyles.list_products_body}>
            
          
                <View style={Globalstyles.home_header}>
                <Image
                style={Globalstyles.headerPFP}
                source={{
                    uri: 'https://cdn.pixabay.com/photo/2012/04/18/00/07/silhouette-of-a-man-36181_640.png',
                  }}
                />
                    <Text style={Globalstyles.home_header_text}>Bem Vindo</Text>
                    <Text style={Globalstyles.home_header_text}> {user_name} </Text>
                </View>
           
            <FlatList 
            data={list_products}
            renderItem={({item}:any) => {
            return(
            <>
            <Card_motorista
            image = {item.produto.imagem}
            Name = {item.produto.nome}
            Quantity = {item.quantidade} 
            Start_Location = {item.origem.nome}
            Destination_Location = {item.destino.nome}
            Status = {item.status}
            History = {item.historico}
            Id = {item.id}
            />
            <View style={Globalstyles.Card_Button_Group_Motorista}>
            {
                item.status == 'created' && 
                <TouchableOpacity style={Globalstyles.Card_Button_Motorista} onPress={() => getImageCamera(item.id)}>
                <Text>Iniciar Entrega</Text>
                </TouchableOpacity>
            }
            {
                item.status == 'em transito' && 
                <TouchableOpacity style={Globalstyles.Card_Button_Motorista} onPress={() => getImageCameraDestination(item.id)}>
                <Text>Finalizar Entrega</Text>
                </TouchableOpacity>
            }
            {
                item.status == 'Coleta finalizada' 
            }

{
                item.status == 'created' && 
                <TouchableOpacity style={Globalstyles.Card_Button_Motorista} onPress={() => navigation.navigate('TelaMapa',{
                    Latitude_origin: item.origem.latitude, 
                    Longitude_origin: item.origem.longitude, 
                    Latitude_destination: item.destino.latitude, 
                    Longitude_destination: item.destino.longitude
                    })}>

                <Text>Abrir Mapa</Text>
                </TouchableOpacity>
            }
            {
                item.status == 'em transito' && 
                <TouchableOpacity style={Globalstyles.Card_Button_Motorista} onPress={() => navigation.navigate('TelaMapa',{
                    Latitude_origin: item.origem.latitude, 
                    Longitude_origin: item.origem.longitude, 
                    Latitude_destination: item.destino.latitude, 
                    Longitude_destination: item.destino.longitude
                    })
                    
                    }>

                <Text>Abrir Mapa</Text>
                </TouchableOpacity>
            }
            {
                item.status == 'Coleta finalizada' 
            }
                
            
            </View>  
            </>
            )}
        }
            />
             
            </View>
            </ImageBackground>
        </View>
    )
}