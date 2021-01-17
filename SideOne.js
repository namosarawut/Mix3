import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

 function SideOne() {
    return (
        <View style={styles.container}>
            <Text>SideOne</Text>
        </View>
    )
}
export default SideOne;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
