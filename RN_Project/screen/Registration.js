import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";

import { AntDesign} from '@expo/vector-icons';

export default function Registration({navigation}) {
  const [image, setImage] = useState(null);
  const addImage = () => { };
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [confirmPassword, confirmPasswordChange] = useState("");


  return (
    <View style={styles.container}>

      <View style={imageUploaderStyles.container}>
        {
          image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        }

        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>

      </View>

      <Text style={styles.label}>Name *</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => nameChange(text)}
        placeholder="enter name"
        placeholderTextColor="#003f5c"
        value={name}
      />

      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => emailChange(text)}
        placeholder="enter email"
        placeholderTextColor="#003f5c"
        value={email}
      />

      <Text style={styles.label}>Phone </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => phoneChange(text)}
        placeholder="enter Phone number"
        placeholderTextColor="#003f5c"
        value={phone}
      />


      <Text style={styles.label}>Password *</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => passwordChange(text)}
        secureTextEntry={true}
        placeholder="enter password"
        placeholderTextColor="#003f5c"
        value={password}
      />

      <Text style={styles.label}>Confirm Password *</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => confirmPasswordChange(text)}
        secureTextEntry={true}
        placeholder="enter confirm Password"
        value={confirmPassword}
      />

      <TouchableOpacity style={styles.loginBtn}
        onPress={() =>
          navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>


    </View>
  );
}

const imageUploaderStyles=StyleSheet.create({
  container:{
      elevation:2,
      height:200,
      width:200,
      backgroundColor:'#efefef',
      position:'relative',
      borderRadius:999,
      overflow:'hidden',
  },
  uploadBtnContainer:{
      opacity:0.7,
      position:'absolute',
      right:0,
      bottom:0,
      backgroundColor:'lightgrey',
      width:'100%',
      height:'25%',
  },
  uploadBtn:{
      display:'flex',
      alignItems:"center",
      justifyContent:'center'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    backgroundColor: "#ccfcfa",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "65%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#27cfbe",
  },

  loginText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderRadius: 30,
    backgroundColor: "#ccfcfa",
    fontSize: 15,
    width: 300
  },

  label: {
    fontSize: 18,
    paddingTop: 20
  },

  Button: {
    paddingTop: 20,
    color: "red"
  },
  B: {
    color: "red",
    fontSize: 20
  }

})
