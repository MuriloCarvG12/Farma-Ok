import { StyleSheet } from "react-native";

export  const Globalstyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 50,
      
    },

    /***Tela Login */
    login_enter_body: 
    {
      backgroundColor: 'rgba(254, 254, 255, 0.2)',
      alignContent: 'center',
      alignItems: 'center',
      width: "85%",
      height: "100%",
      gap: 40,
      padding: 10,
      borderRadius: 40,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 4,
    },
    login_form_title:
    {
      fontSize: 30,
      fontWeight: '700'
      
    },
    
    login_form_field:
    {
      flexDirection:'row',
      alignItems:'center',
      alignSelf: 'center',
      backgroundColor: 'white',
      width: "100%",
      height: "20%",
      padding: 10,
      borderRadius: 40,
      justifyContent:'center',
      gap: 10,
  
    },
    Text_Input_Login:
    {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'heavy',
      fontSize: 20,
      backgroundColor: 'white',
      width: "80%",
      height: "50%",
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: 2,
    },
    login_button_body:
    {
      width: "100%",
      height: "20%",
      
    },
    login_button_form:
    {
      width: "100%",
      height: "80%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48BEFF',
      borderRadius: 40,
    },
    login_button_text:{
      color: 'white',
      fontWeight: '700',
      fontSize: 20,
    },
    login_register_body:
    {
      backgroundColor: 'white',
      width: "80%",
      height: "25%",
      gap: 40,
      padding: 20,
      borderRadius: 40,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 4,
      
    },
    login_register_text:
    {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      gap: 20,
      flexDirection: 'row',
      fontSize: 18,
      fontWeight: '700',
      color: 'black',
    },
    login_register_button:
    {
      width: "100%",
      height: "50%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48BEFF',
      borderRadius: 40,
    },

    /**Tela Home */
    home_header:
    {
      width: "90%",
      height: "10%",
      backgroundColor: '#43C59E',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 30,
    },
    headerPFP: {
      width: 50,
      height: 50,
    },
    home_header_text:
    {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
    },
    home_estoque:
    {
      backgroundColor: 'rgba(254, 254, 255, 0.2)',
      width: "80%",
      height: "20%",
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },

    home_link_title:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
      width: "100%",
      height: "48%",
      backgroundColor: '#3DFAFF',
    },
    home_usuarios:
    {
      backgroundColor: 'rgba(254, 254, 255, 0.2)',
      width: "80%",
      height: "20%",
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    home_button:
    {
      width: 200,
      height: 50,
      
      backgroundColor: '#e0f1ff',
    },
    home_link:
    {
      fontSize: 25,
      fontWeight: '600',
      color: 'grey',
      textAlign: 'center',
    },
  /*** Tela Listagem Usuarios */
    Header_Body:
    {
      width: "100%",
      height: "10%",
      backgroundColor: '#4ddbb1',
    },
    Card_body:
    {
      width: "70%",
      height: "20%",
      alignItems: 'center',
      gap: 30,
      backgroundColor: 'white',
    },
    Card_view:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
      backgroundColor: '#48BEFF',
      height: "30%",
      width: "100%",
    },
    Card_text:
    {
      fontSize: 25,
      fontWeight: '600',
      color: 'grey',
    },
    Card_control:
    {
      alignItems: 'center',
    },
    Card_control_text:
    {
      fontSize: 18,
      fontWeight: '600',
      
    },

    

});


  