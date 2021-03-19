import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';
import profile from './assets/profile.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />

      <View style={styles.detailContainer}>
        <Text style={styles.label}>School</Text>
        <TextInput style={ styles.info}></TextInput>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={ styles.info}></TextInput>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.title}>Name</Text>
        <TextInput style={ styles.info1}></TextInput>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.title}>NickName</Text>
        <TextInput style={ styles.info1}></TextInput>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.title}>Emergency Number</Text>
        <TextInput style={styles.info1}></TextInput>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:5
    
  },
  image:{
    marginTop:100,
    width:170,
    height:150,
    marginBottom:30,
    alignSelf:"center",
    borderRadius:105,
    
  },
  info:{
    fontSize:17
  },

  label:{
    fontSize:15

  },
  title:{
    color:"aqua",

  },
  info1:{
    borderBottomColor:"black",
    borderBottomWidth:1,
    marginTop:5,
    marginBottom:10,
    fontSize:17

  },
  detailContainer:{
    flexDirection:"column",
    marginHorizontal:10,
  marginVertical:3
  },
  button:{
    backgroundColor:"deepskyblue",
    width:250,
    height:50,
    alignSelf:"center",
    borderRadius:50

  },
  buttonText:{
    color:"white",
    fontSize:20,
    paddingVertical:7,
    paddingHorizontal:35
  }

});
