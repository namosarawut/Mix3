import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title ,Button} from 'native-base';

function FeedScreen({ navigation }) {

    return (

        <Container>
        <Header >
       <Left>
       
       </Left>
       <Body>
       <Title style={{fontSize:28}}>Feed</Title>
       </Body>
       <Right>
       <Button transparent onPress={() => navigation.toggleDrawer()} >
           <Icon name='menu' />
         </Button>
       </Right>
     </Header>
       
     </Container>
    );
  }

  export default FeedScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
   
})
