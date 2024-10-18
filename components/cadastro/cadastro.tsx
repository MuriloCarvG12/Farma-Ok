import { ImageBackground, Text, View, TextInput, TouchableOpacity,  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Globalstyles} from '.././globalstyles'


function cadastro_body()
{
<View style={Globalstyles.login_register_body}>

              <View style={Globalstyles.login_register_text}>
                <AntDesign name="question" size={32} color="black" />
                <Text style={Globalstyles.login_register_text}>Não possui uma conta?</Text>
              </View>

              <TouchableOpacity style={Globalstyles.login_register_button}>
                <Text style={Globalstyles.login_button_text}>Cadastre-se!</Text>
              </TouchableOpacity>
</View>
}