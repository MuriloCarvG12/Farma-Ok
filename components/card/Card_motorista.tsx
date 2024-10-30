import {View, Text, Image, ScrollView, FlatList, TouchableOpacity, Alert} from 'react-native'
import { Globalstyles } from '../globalstyles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState, useRef , ReactNode, ReactPortal } from 'react';
import { CameraView, CameraType } from 'expo-camera'
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native'

import * as ImagePicker from 'expo-image-picker';

export default function Card_motorista({Name, Quantity, Image, Start_Location, Destination_Location, Status, History, Id}:any)
{
    
    const [loading, setLoading] = useState(false)

    

   

    async function getImageCamera(idDaMovimentacao:any) {

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
    
            body.append("motorista", "Joaozim")
    
            axios.put('https://06e8-187-183-36-59.ngrok-free.app/movements/' + Id + '/start', body, {
              headers: {
                "Content-Type": 'multipart/form-data'
              }
            })
    
          }
        }
      }

    /***Criação de variaveis que controlam estilizações no card com color (background color) height para a altura do card e progress_bar para determinar tamanho da barra de progresso */
    let color = '#fff'

    if(Status == 'created')
        {
            
            color = 'rgba(173, 173, 173, 0.7)'
        }
    else if(Status == 'em transito')
        {
            color = 'rgba(245, 153, 49, 0.7)'
        }
    else if(Status == 'Coleta Finalizada')
        {
            color = 'rgba(157, 224, 166, 0.7)'
        }

    let progress_bar;

    if(Status == 'created')
        {
            progress_bar = 10;
        }
    else if(Status == 'em transito')
        {
            progress_bar = 140
        }
    else if(Status == 'done')
        {
            progress_bar = 280
        }

    
    return(
        
        
        <View style={[Globalstyles.Card_Body_Motorista, {backgroundColor: color}]}>
        
            
            <View style={Globalstyles.Card_Header_Motorista}>
            
            
            <View style={{}}>
                <View style={Globalstyles.Card_Item_Group_Motorista}>
                
                <Text style={{width: "100%", textAlign: 'center', fontSize: 20, marginBottom: 30}}> {Name} </Text>
                </View>

                <View style={Globalstyles.Card_Item_Group_Motorista}>
                    <Text style={{fontWeight: 'bold'}}>Quantidade do Produto</Text>
                    <Text> {Quantity} </Text>
                </View>
            </View>
        </View>

        <Text style={{marginBottom: 10, alignSelf: 'center', fontWeight: 'bold', fontSize: 18,}}>Status da entrega</Text>
        <View style={Globalstyles.Card_Progress_items}>
                <View>
                        <FontAwesome6 name="truck-fast" size={24} color="#14453D"/>
                </View>
                <View style={[Globalstyles.Card_Progress_Bar, {width: progress_bar}]}>
                    
                </View>

        </View>

            <View style={Globalstyles.Card_Body_Items_Motorista}> 

            <View style={Globalstyles.Card_Item_Group_Motorista}>
                    <Text style={{fontWeight: 'bold'}}>Local de Origem: </Text>
                    <Text> {Start_Location} </Text>
            </View>

            <View style={Globalstyles.Card_Item_Group_Motorista}>
                    <Text style={{fontWeight: 'bold'}}>Local de Destino: </Text>
                    <Text> {Destination_Location} </Text>
            </View>

            <View style={Globalstyles.Card_Item_Group_Motorista}>
                    <Text style={{fontWeight: 'bold'}}>Status do Produto: </Text>
                    <Text> {Status} </Text>
                       
            </View>

            <View>    
                    <View style={Globalstyles.Card_Item_Group_Motorista}>
                            <Text style={{fontWeight: 'bold'}}>Histórico do Produto: </Text>
                    </View>

                    
                        <View style={Globalstyles.Card_History_Motorista}>
                            {History.map((history_item:any) =>
                            <Text>{history_item.descricao}</Text>
                            )}
                        </View>  
                                                       
                    </View>  
                   
            </View>  
        
        
        <View style={Globalstyles.Card_Button_Group_Motorista}>

            <TouchableOpacity style={Globalstyles.Card_Button_Motorista} onPress={getImageCamera}>
                <Text>Iniciar Entrega</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Globalstyles.Card_Button_Motorista}>
                <Text>Abrir Mapa</Text>
            </TouchableOpacity>
                        
        </View>                             
        </View>
    )
}