import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '../components/globalstyles'
import { useState } from 'react';
import axios from 'axios';

const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}

/***
 *                        ___________________
 *                        |nao esqueça      |
 *                        |'admin@gmail.com |
 *                        |'123456'         |
 *                        |_________________| 
 *                               |
 *                               |
 */

export default function Login({navigation}:any) {

    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    function handle_login()
    {
      axios
      .post('https://0955-187-183-36-59.ngrok-free.app/login', {
        email: email,
        password: password
      })
      .then((response) => {
        if(response.data.profile === "admin")
          {
             navigation.navigate("Home")
          }
        else if(response.data.profile === "filial")
        {
          console.log('tela-filial')
        }
        else
        {
          console.log('tela-motorista')
        }

    })
    .catch(() => {
        Alert.alert('Usuario não cadastrado')
    })

    }



    return (
      <View style={Globalstyles.container}>

        <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
        <StatusBar style="auto" />
  
        <View style={Globalstyles.login_enter_body}>
          <Text style={Globalstyles.login_form_title}> Login </Text>
  
          <View style={Globalstyles.login_form_field}>
              <Ionicons name="person" size={32} color="#14453D" />
              <TextInput 
              style={Globalstyles.Text_Input_Login}
              placeholder='Email'

              value= {email}
              onChangeText={set_email}

              />
              
          </View>
  
          <View style={Globalstyles.login_form_field}>
              <AntDesign name="lock1" size={32} color="#14453D" />
              <TextInput 
  
              style={Globalstyles.Text_Input_Login}
              placeholder='Password'
              value= {password}
              onChangeText={set_password}
          
              />

          </View>
          <View style={Globalstyles.login_button_body}>
            
            <TouchableOpacity style={Globalstyles.login_button_form} onPress={handle_login}>
                <Text style={Globalstyles.login_button_text}>Login!</Text>
            </TouchableOpacity>
          </View>
  
        </View>
  
        
  
      </ImageBackground>
      </View>
    );
  }