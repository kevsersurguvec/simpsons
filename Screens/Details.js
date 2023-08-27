import React from 'react';
import {Image, View, Text, StyleSheet, } from 'react-native';

const Details = ({ route }) => {
  
  const {name}=route.params;
  const {job}=route.params;
  const {avatar}=route.params;
  const {description}=route.params;
  
  console.log(name);
  return (
    <View style={styles.container}  >
     <Image   source= {{ uri: avatar }} 
              style={{ width:200, height:200,resizeMode: 'contain', alignSelf:"center", alignContent:"center", alignItems:'center', justifyContent:'center' }} />
     
      <Text style={styles.nameStyle} > {name} </Text>
      <Text style={styles.jobStyle} > {job} </Text>
      <Text style={styles.descriptionStyle} > {description} </Text>
    
    </View>
          );
        };



const styles = StyleSheet.create({
  container:{
    paddingLeft:25,
    paddingRight:25,
    paddingTop:10,
  },
  nameStyle:{ 
    fontSize:30,
    color:"black",
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center",
  },
  jobStyle:{
    fontSize:20,
    color:"darkgray",
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center",
  },
  descriptionStyle:{
    fontSize:12,
  },
  
});
export default Details;