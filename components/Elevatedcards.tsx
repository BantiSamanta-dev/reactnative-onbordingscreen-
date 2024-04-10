import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class Elevatedcards extends Component {
  render() {
    return (
      <View>
      
        <Text style={styles.headertext}>Elevatedcards</Text>
       <ScrollView horizontal={true} style={styles.container}>
       <View style={[styles.card,styles.card1]}>
                <Text>RED</Text>
            </View>
            <View style={[styles.card,styles.card2]}>
                <Text>GREEN</Text>
            </View>
            <View style={[styles.card,styles.card3]}>
                <Text>BLUE</Text>
            </View>
            <View style={[styles.card,styles.card4]}>
                <Text>BLUE</Text>
            </View>
            <View style={[styles.card,styles.card2]}>
                <Text>GREEN</Text>
            </View>
       </ScrollView>
        </View>   
     
      
      
    )
  }
}

const styles = StyleSheet.create({
    headertext:{
        fontSize:18,
        fontWeight:'bold',
       marginTop:25,
       color:"black",
       paddingLeft:140
    },
    container:{
        padding:8
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width:300,
        height:150,
        margin:8,
        borderRadius:8,

      

    },
    card1:{
        backgroundColor:'red',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'blue'
    },
    card2:{
        backgroundColor:'blue'
    },
    card3:{
        backgroundColor:'green'
    },
    card4:{
        backgroundColor:"yellow"
    }

    
})