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
      width: 300,
      height: 150,
      alignItems: 'center',
      gap: 30,
      backgroundColor: 'white',
      marginTop: 40,
      
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
    users_button:
    {
      width: 225,
      height: 60,
      justifyContent: 'center',
      backgroundColor: '#e0f1ff',
      marginBottom: 40,
    },
    /***Tela Cadastro Usuários */
    user_register_page:
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: "100%",
      height: "100%",
    },
    
    user_register_type:
    {
      marginTop: 40,
      marginBottom: 30,
    },
    user_register_form:
    {
      padding: 10,
      width: "85%",
      height: "95%",
      backgroundColor: 'rgba(254, 254, 255, 0.2)',
      marginBottom: 40,
      gap: 60,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 30,
    },
    user_register_block:
    {
      
    },
    user_register_item:
    {
      
      gap: 10,
    },
    user_register_input_title:
    {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 18,
    },
    user_register_input:
    {
      alignSelf: 'center',
      backgroundColor: 'white',
      width: "80%",
      
    },
    user_register_login:
    {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    user_register_login_text:
    {
      fontSize: 20,
      fontWeight: '700',
      
    },
    form_button:
    {
      width: 200,
      height: 50,
      marginBottom: 20,
      
      backgroundColor: '#a0d1fa',
      
    },

  /*** Tela de listagem de Produtos */
  list_products_body:
  {
    height: "100%",
    width: "100%",

    alignItems: 'center',
  },
  list_products_header:
  {
    height: "10%",
    width: "100%",
    backgroundColor: '#3D7068',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  Product_card_head:
  {
    backgroundColor: '#43C59E',
    height: "10%",
    alignItems: 'center',
    padding: 6,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  Product_card_head_Title:
  {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
  Product_card_body: 
  {
    backgroundColor: 'white',
    width: 300,
    height: 400,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#43C59E',
    gap: 10,
    marginBottom: 30,
  },
  Product_card_body_items:
  {
    paddingTop: 20,
    gap: 20,
    alignItems: 'center',
  },
  Product_card_body_items_row:
  {
    width: "100%",
    flexDirection: 'row',
  },
  Product_card_body_items_text:
  {
    fontWeight: '600',
  },

  /*** Tela do Motorista */
  
  Card_Body_Motorista:
  {
    width: 300,
    height: 700,
    backgroundColor: 'rgba(204, 204, 204, 0.7)',
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#43C59E",
    marginTop: 40,
    
  },
  Card_Header_Motorista:
  {
    
    flexDirection: 'row',
    gap: 30,
    marginBottom: 30,
  },
  Card_Progress_items:
  {
    marginBottom: 40,
    height: "5%",
    width: "100%",
  
  },
  Card_Progress_Bar:
  {
    
    height: "100%",
    width: "50%",
    backgroundColor: '#45d9ad'
  },

  Card_Item_Group_Motorista:
  {
    flexDirection: 'row'
  },
  Card_Body_Items_Motorista:
  {
    gap: 30,
  },
  Card_History_Motorista:
  {
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  Card_Button_Group_Motorista:
  {
    
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Card_Button_Motorista:
  {
    height: 50,
    width: 125,
    backgroundColor: '#48BEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  
});


  