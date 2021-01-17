import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView,SafeAreaView} from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title ,Button,Content} from 'native-base';

function ProfileScreen({ navigation }) {

    return (

        <Container>
        <Header >
       <Left>
       <Title style={{fontSize:28}}>Profile</Title>
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

  export default ProfileScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
   
})
