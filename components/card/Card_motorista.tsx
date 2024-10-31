import {View, Text, Image, ScrollView, FlatList, TouchableOpacity, Alert} from 'react-native'
import { Globalstyles } from '../globalstyles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState, useEffect , ReactNode, ReactPortal } from 'react';
import { CameraView, CameraType } from 'expo-camera'
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native'

import * as ImagePicker from 'expo-image-picker';

export default function Card_motorista({Name, Quantity, image, Start_Location, Destination_Location, Status, History, Id}:any)
{
    
    /***Criação de variaveis que controlam estilizações no card com color (background color) height para a altura do card e progress_bar para determinar tamanho da barra de progresso */
    let color = '#fff'
    let progress_bar = 0;
    let truck = 0;

    if(Status == 'created')
        {
            color = 'rgba(173, 173, 173, 0.7)'
        }
    else if(Status == 'em transito')
        {
            color = 'rgba(245, 153, 49, 0.7)'
        }
    else if(Status == "Coleta finalizada")
        {
            color = 'rgba(157, 224, 166, 0.7)'
        }

    

    if(Status == "created")
        {
            progress_bar = 10;
        }
    else if(Status == "em transito")
        {
            progress_bar = 140
        }
    else if(Status == "Coleta finalizada")
        {
            progress_bar = 280
        }
    
    

    if(Status == 'created')
        {
            truck = 0;
        }
    else if(Status == 'em transito')
        {
            truck = 120
        }
    else if(Status == "Coleta finalizada")
        {
            truck = 245
        }
//[Globalstyles.Card_Progress_truck, {paddingLeft: truck}]
    
    return(
        
        
        <View style={[Globalstyles.Card_Body_Motorista, {backgroundColor: color}]}>
        
            
            <View style={Globalstyles.Card_Header_Motorista}>
            
            
            <View style={{}}>
                <View style={Globalstyles.Card_Item_Group_Motorista}>
                
                <Text style={{width: "100%", textAlign: 'center', fontSize: 20, marginBottom: 30}}> {Name} </Text>
                </View>
                <Image
                style={{
                    marginBottom: 20,
                    width: 75,
                    height: 75,
                    alignSelf: 'center',
                }}
                source={{
                    uri: image,
                  }}
                />
                <View style={Globalstyles.Card_Item_Group_Motorista}>
                    <Text style={{fontWeight: 'bold'}}>Quantidade do Produto</Text>
                    <Text> {Quantity} </Text>
                </View>
            </View>
        </View>

        <Text style={{marginBottom: 10, alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}>Status da entrega</Text>
        <View style={Globalstyles.Card_Progress_items}>
                <View style={[Globalstyles.Card_Progress_truck, {paddingLeft: truck}]}>  
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
        
        
                                   
        </View>
    )
}