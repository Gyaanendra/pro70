import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , Image ,TextInput,ImageBackground, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class Write extends React.Component{
    render(){
        return(
    
                    <View style={css.con}>
                   <View style={css.con2}>
                   <Text style={css.text}> 
                       Author:- <TextInput style={css.textimput}/>     
                      </Text>
                   </View>

                   <View style={css.con2}>
                   <Text style={css.text}> 
                    Title:-<TextInput style={css.textimput}/>     
                      </Text>
                   </View>

                   <View style={css.con2}>
                   <Text style={css.text}> 
                    Write your story:-
                    <TextInput style={css.textimput2}/>     
                      </Text>
                   </View>

               </View>
            
               
           
        )
    }
}

const css = StyleSheet.create({
    con:{
        flex:1,
        marginLeft:15,
        marginTop:10
        
    },
    con2:{
        
        marginLeft:10,
        marginTop:24
        
    },
    
    text:{
       fontSize:25,
       color:'#171010',
    },
    textimput:{
        fontSize:25,
        borderRadius:15,
        borderWidth:2,
        color:'#171010',
       
        
    },

    textimput2:{
        fontSize:25,
        borderRadius:15,
        borderWidth:2,
        color:'#171010',
        width:1720,
       height:300
        
    },



})