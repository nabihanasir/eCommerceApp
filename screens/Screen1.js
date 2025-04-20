import React from "react";
import { View, Text ,Image,StyleSheet, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Screen1()
{
    return(
        <>
        <StatusBar></StatusBar>
        <View style={styles.picholder}>
            <Image source={require('./../assets/screen1img.png')} style={styles.imagestyle}></Image>
        </View>
        <View style={styles.textholder}>
            <Text style={styles.headingtext}>
            Get The Freshest Fruit Salad Combo
            </Text>
            <Text>
            We deliver the best and freshest fruit salad in town. Order for a combo today!!!
            </Text>
         <TouchableOpacity style={styles.largebutton}> <Text>Let's continue</Text></TouchableOpacity>
        </View>
       </>
    )
}
const styles=StyleSheet.create(
    {
        largebutton:{
            backgroundColor:'#FFA451',
            borderRadius:20,
            height:50,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
            marginBottom:10,
        },
        picholder:{
            flex:0.6,
            backgroundColor:'#FFA451',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
        },
        textholder:{
            flex:0.4,
            padding:20,
        },
        headingtext:
        {fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:10, color:'#000'},
        imagestyle:
        {
            resizeMode:'contain',
            paddingLeft:100,
        }
    }
)
