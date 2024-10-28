import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import { Globalstyles } from '../globalstyles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';



export default function Card_motorista({Name, Quantity, Image, Start_Location, Destination_Location, Status, History}:any)
{
    let color = '#fff'

    if(Status == 'created')
        {
            
            color = 'rgba(173, 173, 173, 0.7)'
        }
    else if(Status == '')
        {
            color = 'rgba(245, 153, 49, 0.7)'
        }
    else if(Status == '')
        {
            color = 'rgba(204, 204, 204, 0.7)'
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
                <View style={{paddingTop: 5}}>
                        <FontAwesome6 name="truck-fast" size={24} color="#14453D"/>
                    </View>
                <View style={Globalstyles.Card_Progress_Bar}>
                    
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
                            {History.map((history_item:any ) =>
                            <Text>{history_item.descricao}</Text>
                            )}
                        </View>  
                                                       
                    </View>  
                   
            </View>  
        
        
        <View style={Globalstyles.Card_Button_Group_Motorista}>

            <TouchableOpacity style={Globalstyles.Card_Button_Motorista}>
                <Text>Iniciar Entrega</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Globalstyles.Card_Button_Motorista}>
                <Text>Iniciar Entrega</Text>
            </TouchableOpacity>

        </View>

                  
        </View>
    )
}