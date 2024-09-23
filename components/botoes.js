import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";


export function BtnAmarelo ({conta, setConta, texto}) { 
  let handCLick = () =>  {
    if (texto == "=") {
      let result = eval(conta);// ternmia aqui pai
      setConta(conta + texto);
    } else if (texto == "C") {
      setConta("0");
    }
  }
  return (
    <TouchableOpacity style={styles.btnAmarelo}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnAzul ({conta, setConta, texto}) {

  return (
    <TouchableOpacity style={styles.btnAzul}> 
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnRoxo (props) {
  return (
    <TouchableOpacity style={styles.btnRoxo}> 
      <Text style={styles.textoBotao}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

export function BtnC (props) {
  return (
    <TouchableOpacity style={styles.btnC}> 
      <Text style={styles.textoBotao}>{props.texto}</Text>
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
