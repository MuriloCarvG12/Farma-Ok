import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Globalstyles } from './components/globalstyles';

import Login from './screens/login'
import Home from './screens/home'
import Usuarios from './screens/usuarios'
import Cadastro_usuarios from './screens/cadastro_usuario';
import Listagem_produtos from './screens/listagem_produtos';
import Lista_movimentacoes from './screens/listagem_movimentações';
import Cadastro_movimentacoes from './screens/cadastro_movimentacoes';

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer >
      
      
      <Stack.Navigator initialRouteName="ListarMovimentacoes">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Usuarios" component={Usuarios} options={{headerShown: false}}/>
        <Stack.Screen name="CadastrarUsuarios" component={Cadastro_usuarios} options={{headerShown: false}}/>
        <Stack.Screen name="ListarProdutos" component={Listagem_produtos} options={{headerShown: false}}/>
        <Stack.Screen name="ListarMovimentacoes" component={Lista_movimentacoes} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroMovimentacoes" component={Cadastro_movimentacoes} options={{headerShown: false}}/>
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
