import {Text, View, Image} from 'react-native';
import { Globalstyles } from '../globalstyles';

/***
 * 
 *  Versão modificada do card produtos para movimentações
 * 
 */

export default function Movement_card({Name, image, farm_origin, farm_destiny, product, status, quantity}:any){
    return (
        <View style={Globalstyles.Product_card_body}>
            <View style={Globalstyles.Product_card_head}>
                <Text style={Globalstyles.Product_card_head_Title}>{Name}</Text>
            </View>
            <View style={Globalstyles.Product_card_body_items}>
                <Image
                style={{height: 100, width: 100, marginBottom: 30,}}
                source={{
                    uri: image,
                  }}
                />
                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Farmácia Origem:  </Text> 
                    <Text> {farm_origin} </Text>
                </View>

                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Farmácia Destino:  </Text>
                    <Text> {farm_destiny} </Text>
                </View>

                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Produto: </Text>
                    <Text> {product} </Text>
                </View>
                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Quantidade: </Text>
                    <Text> {quantity} </Text>
                </View>
                
                <View style={Globalstyles.Product_card_body_items_row}>
                    <Text style={Globalstyles.Product_card_body_items_text}> Status: </Text>
                    <Text> {status} </Text>
                </View>
            </View>
       </View>
    )
}