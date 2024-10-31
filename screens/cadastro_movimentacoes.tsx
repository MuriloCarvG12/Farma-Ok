import { useState, useEffect } from 'react';
import { ImageBackground, Text, View, Alert, TouchableOpacity,TextInput, ScrollView  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

type Pharm = {
    id:	number
    name: string
    location: string
}

type product = {
    product_id: number
    branch_id:	number
    branch_name: string
    product_name: string
    quantity: number
}

export default function Cadastro_movimentacoes({navigation}:any)
{
    const [filial_origem_options, set_filial_origem_options] = useState<Pharm[]>([])
    const [filial_destino_options, set_filial_destino_options] = useState<Pharm[]>([])
    const [produto_options, set_produto_options] = useState<product[]>([])
    const [produto_options_filtrados, set_produto_options_filtrados] = useState<product[]>([])

    const [quantidade, set_quantidade] = useState('0')


    const [filial_origem, set_filial_origem] = useState<Pharm[]>([])
    const [filial_destino, set_filial_destino] = useState<Pharm[]>([])
    const [produto, set_produto] = useState<product[]>([])
    


    useEffect(() => {
        axios.get('https://16d9-187-183-36-59.ngrok-free.app' + '/branches/options' )
        .then((response) => {
            const data = response.data
            
            set_filial_origem_options(data);
            set_filial_destino_options(data);
          })

          .catch((error) => {
            Alert.alert('Houve um erro com o cadastro');
            console.log(error)
          });
    }, [])

    useEffect(() => {
        axios.get('https://16d9-187-183-36-59.ngrok-free.app' + '/products/options' )
        .then((response) => {
            const data = response.data

            set_produto_options(data);
            
          })

          .catch((error) => {
            Alert.alert('Houve um erro com o cadastro');
            
          });
    }, [])

    useEffect(() => {
        if(filial_origem) {
            const produtos_filtrados = produto_options.filter(produto => produto.branch_id === filial_origem.id)
            set_produto_options_filtrados(produtos_filtrados)
        }
    }, [filial_origem])
    

    function handle_movement() 
    {
        
        if(filial_origem === filial_destino)
            {
                Alert.alert('As unidades escolhidas para transporte são iguais!')
            }
        if(quantidade > produto.quantity)
            {
                Alert.alert('A quantidade disponivel do produto é menor que a quantidade solicitada') 
            }
        
       axios.post('https://16d9-187-183-36-59.ngrok-free.app' + '/movements',
            {
                "originBranchId": filial_origem.id,
                "destinationBranchId": filial_destino.id,
                "productId": produto.product_id,
                "quantity": quantidade
            })

        navigation.navigate("ListarMovimentacoes")
    }

    return(
        <View style={Globalstyles.container}>
            <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
            <View style={Globalstyles.list_moviments_header}>
                    <Text style={Globalstyles.list_moviments_header_text}>Cadastro de Movimentações</Text>
            </View>


            <View style={Globalstyles.form_movements}>
            <ScrollView>
                        
                        
                                {/** input para o Filial Origem */}

                                <View style={Globalstyles.movement_register_item}>
                                    <Text style={Globalstyles.movements_register_input_title}>Filial Origem</Text>
                                    <Picker
                                    selectedValue={filial_origem}
                                    onValueChange={(itemValue) =>
                                    set_filial_origem(itemValue)
                                    }>
                                    <Picker.Item label={'selecione uma origem'} value={''} />
                                    {
                                        filial_origem_options.map((option) => 
                                            
                                            <Picker.Item label={JSON.stringify(option.name)} value={option} />
                                        )
                                    }
                                    
                                    </Picker>

                                </View>


                                {/** input para o Filial Destino */}

                                <View style={Globalstyles.movement_register_item}>
                                    <Text style={Globalstyles.movements_register_input_title}>Filial Destino</Text>
                                    <Picker
                                    selectedValue={filial_destino}
                                    onValueChange={(itemValue) =>
                                    set_filial_destino(itemValue)
                                    }>
                                    <Picker.Item label={'selecione um destino'} value={''} />
                                    {
                                        filial_destino_options.map((option) => 
                                            <Picker.Item label={JSON.stringify(option.name)} value={option} />
                                        )
                                    }
                                    </Picker>
                                </View>

                        

                            {/** input para o Produto Desejado */}

                            <View style={Globalstyles.movement_register_item}>
                                <Text style={Globalstyles.movements_register_input_title}>Produto Desejado</Text>
                                <Picker
                                    selectedValue={produto}
                                    onValueChange={(itemValue) =>
                                    set_produto(itemValue)
                                    }>
                                    <Picker.Item label={'selecione um produto'} value={''} />
                                    {
                                        produto_options_filtrados.map((option) => 
                                            <Picker.Item label={JSON.stringify(option.product_name + ' Quantidade: ' + option.quantity)} value={option} />
                                        )
                                    }
                                    
                                </Picker>
                            </View>
                                 

                            {/** input para o Quantidade */}

                            <View style={Globalstyles.movement_register_item}>
                                <Text style={Globalstyles.movements_register_input_title}>Quantidade</Text>
                                <TextInput style={Globalstyles.user_register_input} value={quantidade} onChangeText={set_quantidade}></TextInput>
                            </View>
                                
                           {/** input para o Quantidade */}

                           <View style={Globalstyles.movement_register_item}>
                                <Text style={Globalstyles.movements_register_input_title}>Observações</Text>
                                <TextInput style={Globalstyles.user_register_input} numberOfLines={3} ></TextInput>
                            </View>
                                
                            
                        
                        
                    </ScrollView>
                    </View>

                <TouchableOpacity style={Globalstyles.movements_button} onPress={() => handle_movement()}>
                        <Text style={Globalstyles.movements_button_text}>Cadastrar Movimentação</Text>
                </TouchableOpacity>
                
            </ImageBackground>
        </View>
    )
}