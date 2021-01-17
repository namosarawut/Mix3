import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

 function SideTwo() {
    return (
        <View style={styles.container}>
            <Text>SideTwo</Text>
        </View>
    )
}
export default SideTwo;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
