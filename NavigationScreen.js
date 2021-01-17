import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title ,Button} from 'native-base';

function NavigationScreen({ navigation }) {

    return (

        <Container>
        <Header >
       <Left>
       <Title style={{fontSize:28}}>Navigation</Title>
       </Left>
       
       <Right>
       <Button transparent onPress={() => navigation.toggleDrawer()} >
           <Icon name='menu' />
         </Button>
       </Right>
     </Header>
       
     </Container>
    );
  }

  export default NavigationScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
   
})
