import React, {useState} from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";


export function BtnAmarelo ({texto, onPress}) { 
  return (
    <TouchableOpacity style={styles.btnAmarelo} onPress={onPress}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnAzul ({texto, onPress}) {
  return (
    <TouchableOpacity style={styles.btnAzul} onPress={onPress}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnRoxo ({texto, onPress}) {
  return (
    <TouchableOpacity style={styles.btnRoxo} onPress={onPress}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnC ({texto, onPress}) {
  return (
    <TouchableOpacity style={styles.btnC} onPress={onPress}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  btnAmarelo : {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee600",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#06000a"
  },
  btnRoxo : {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#795a8b",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#06000a"
  },
  btnC : {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#795a8b",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#06000a"
  },
  btnAzul : {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#908eb5",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#06000a"
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#06000a"
    
  }
});
