import React from "react";
import {Text, StyleSheet, View} from "react-native"

export function Titulo (props) {
  return(
    <Text style={styles.titulo}>
      {props.texto}
    </Text>
  );
}

export function Linha () {
  return (
     <View style={styles.linha}></View>
  )
}

export function Resultado (props) {
  return (
    <Text style={styles.resultado}> 
    {props.texto}
  </Text>
  );
}

const styles = StyleSheet.create ({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 80,
  },
  linha: {
    width: 100,
    height: 2.5,
    backgroundColor: "#06000a",
    marginRight: 140,
    marginTop: -5,
  },
  resultado: {
    fontSize: 20,
    color: "#06000a",
    fontWeight: "bold",
  }
})