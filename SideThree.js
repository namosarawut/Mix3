import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

 function SideThree() {
    return (
        <View style={styles.container}>
            <Text>SideThree</Text>
        </View>
    )
}
export default SideThree;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
