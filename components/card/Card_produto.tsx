import {Text, View, Image} from 'react-native';
import { Globalstyles } from '.././globalstyles';



export default function Product_card({Name, Quantity, image, description, branch_name, location}:any){
    return (
        <View style={Globalstyles.Product_card_body}>
            <View style={Globalstyles.Product_card_head}>
                <Text>{Name}</Text>
            </View>
            <View style={Globalstyles.Product_card_body_items}>
                <Image
                style={{height: 100, width: 100}}
                source={{
                    uri: image,
                  }}
                />
                <Text>  Sobre: {description} </Text>
                <Text> Quantidade Disponivel: {Quantity} </Text>
                <Text> Farmácia: {branch_name}</Text>
                <Text> Location: {location}</Text>
            </View>
       </View>
    )
}