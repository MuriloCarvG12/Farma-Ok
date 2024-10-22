import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, Image, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import {Globalstyles} from '.././components/globalstyles'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import axios from 'axios';
import Card from '.././components/card/Card'
import Header from '.././components/header/Header'

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

export default function Cadastro_usuarios()
{

    const [Profile, setProfile] = useState('');
    const [Name, setName] = useState('');
    const [Document, setDocument] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [CheckPassword, setCheckPassword] = useState('');

    function handleRegistration()
    {
        const profile = Profile
        const name = Name
        const document = Document
        const address = Address
        const email = Email
        const password = Password
        const checkpassword = CheckPassword
        

        if(password !== checkpassword)
            {
                Alert.alert('as senhas estao incorretas!')
            }

        else if( profile && name && document && address && email && password && checkpassword !== '')
            { 
                 axios.post(process.env.EXPO_PUBLIC_API_URL + '/register', {
                    profile: profile,
                    name: name,
                    document: document,
                    full_address: address,
                    email: email,
                    password: password,

                  })

                  .then((response) => {
                    Alert.alert('O cadastro foi feito com sucesso');
                  })

                  .catch((error) => {
                    Alert.alert('Houve um erro com o cadastro');
                    console.log(error)
                  });
                
            }
        else
        {
            Alert.alert('Pelo menos um campo nao foi preenchido')   
        }
        

    }

    return(
        <View style={Globalstyles.container}>
        <Picker
        style={Globalstyles.user_register_type}
        selectedValue={Profile}
        onValueChange={(itemValue) =>
        setProfile(itemValue)
        }>

        <Picker.Item style={Globalstyles.user_register_input_title} label="Selecione o tipo de usuário" value = "" />
        <Picker.Item style={Globalstyles.user_register_input_title} label="Filial" value="filial" />
        <Picker.Item style={Globalstyles.user_register_input_title} label="Motorista" value="motorista" />

        </Picker>

        <View  style={Globalstyles.user_register_page}>
        <StatusBar /> 
                    <View style={Globalstyles.user_register_form}>
                    <ScrollView>
                        <View>
                        
                            {/** input para o Nome */}

                           <View style={Globalstyles.user_register_item}>
                                <Text style={Globalstyles.user_register_input_title}>Nome Completo</Text>
                                <TextInput style={Globalstyles.user_register_input} value={Name} onChangeText={setName}></TextInput>
                            </View>

                            {/** input para o CPF */}

                            <View style={Globalstyles.user_register_item}>
                            <Text style={Globalstyles.user_register_input_title}>CPF</Text>
                                <TextInput style={Globalstyles.user_register_input} value={Document} onChangeText={setDocument}></TextInput>
                            </View>

                            {/** input para o Endereço */}

                            <View style={Globalstyles.user_register_item}>
                                <Text style={Globalstyles.user_register_input_title}>Endereço Completo</Text>
                                <TextInput style={Globalstyles.user_register_input} value={Address} onChangeText={setAddress}></TextInput>
                            </View>

                        </View>

                        <View style={Globalstyles.user_register_login}>
                            <Ionicons name="person" size={32} color="#14453D" />
                            <Text style={Globalstyles.user_register_login_text} > Cadastro de Login</Text>
                        </View>

                        <View>

                            {/** input para o Email */}

                           <View style={Globalstyles.user_register_item}>
                                <Text style={Globalstyles.user_register_input_title}>Email</Text>
                                <TextInput style={Globalstyles.user_register_input} value={Email} onChangeText={setEmail}></TextInput>
                            </View>

                            {/** input para as senha */}

                            <View style={Globalstyles.user_register_item}>
                            <Text style={Globalstyles.user_register_input_title}>Senha</Text>
                                <TextInput style={Globalstyles.user_register_input} value={Password} onChangeText={setPassword}></TextInput>
                            </View>

                            {/** input para a senha repetida */}

                            <View style={Globalstyles.user_register_item}>
                                <Text style={Globalstyles.user_register_input_title} >Confirme Senha</Text>
                                <TextInput style={Globalstyles.user_register_input} value={CheckPassword} onChangeText={setCheckPassword} ></TextInput>
                            </View>
                            
                        
                        </View>
                        </ScrollView>
                    </View>
                               
                <TouchableOpacity style={Globalstyles.form_button} onPress={()  => handleRegistration()} >
                    <Text style={{textAlign: 'center', fontWeight: '600', justifyContent: 'center', alignItems: 'center', fontSize: 20, color: 'white'}}>Cadastrar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        
    )
}