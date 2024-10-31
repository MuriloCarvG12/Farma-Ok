import { StatusBar} from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert, FlatList, ScrollView  } from 'react-native';
import { Globalstyles } from '../components/globalstyles';
import Card_motorista from '../components/card/Card_motorista';
import { useEffect, useState } from 'react';
import MapView, { Marker, Polyline  }  from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';


const image = {uri: 'https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user'}



export default function Tela_mapa({route , navigation}:any)

// Latitude_origin, Longitude_origin, Latitude_destination, Longitude_destination
{   
    const { Latitude_origin, Longitude_origin, Latitude_destination, Longitude_destination} = route.params;
    
    const initial_region = 
    {
        latitude: Latitude_origin,
        longitude: Longitude_origin
    }
    const destination_region = 
    {
        latitude: Latitude_destination,
        longitude: Longitude_destination
    }

    
    return(
     <View style={Globalstyles.container}>
        

        <ImageBackground source={image} resizeMode="cover" style={Globalstyles.image}>
        
        

        <MapView
            style={{width: '100%', height: '100%'}}
            
            initialRegion={
              {
                latitude: Latitude_origin, // latitude do brasil
                longitude: Longitude_origin, // longitude do brasil
                latitudeDelta: 1,
                longitudeDelta: 1
              }
            }
          > 
          
          <Polyline coordinates={
                    [{latitude:Latitude_origin,longitude:Longitude_origin,},
                     {latitude:Latitude_destination,longitude:Longitude_destination,}
                     
                    ]}
                    
                    strokeColor="red"
                    strokeWidth={2}
                    />

          
          <Marker
                  coordinate={{
                    latitude: Latitude_origin,
                    longitude: Longitude_origin
                  }}
                  title={'Inicio'}
    
                />

            <Marker
                  coordinate={{
                    latitude: Latitude_destination,
                    longitude: Longitude_destination
                  }}
                  title={'Destino'}
    
                />

            
          </MapView>
        
            

        </ImageBackground>
    </View>
    )
    
}