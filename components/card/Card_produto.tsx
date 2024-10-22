import {Text, View, Image} from 'react-native';
import { Globalstyles } from '.././globalstyles';



export default function Product_card({Name, Quantity, image, description, branch_name, location}:any){
    return (
        <View style={Globalstyles.Product_card_body}>
            <View style={Globalstyles.Product_card_head}>
                <Text style={Globalstyles.Product_card_head_Title}>{Name}</Text>
            </View>
            <View style={Globalstyles.Product_card_body_items}>
                <Image
                style={{height: 100, width: 100}}
                source={{
                    uri: image,
                  }}
                />
                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Sobre:  </Text> 
                    <Text> {description} </Text>
                </View>

                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Quantidade Disponivel:  </Text>
                    <Text> {Quantity} </Text>
                </View>

                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Farmácia: {branch_name}</Text>
                    <Text> {branch_name} </Text>
                </View>
                
                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Location: </Text>
                    <Text> {location} </Text>
                </View>
            </View>
       </View>
    )
}