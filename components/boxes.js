import React from "react";
import {View, StyleSheet} from "react-native"


export function BoxBtn ({children}) {
  return(
    <View style={styles.boxbtn}>
      {children}
    </View>
  );
}

export function BoxPrincipal ({children}) {
  return(
    <View style={styles.boxPrincipal}>
      {children}
    </View>
  );
}

export function BoxResultado ({children}) {
  return (
    <View style={styles.boxResultado}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  boxbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ea5074",
    width: 300,
    height: 220,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  boxPrincipal: {
    flex: 1,
    backgroundColor: "#ea5074",
    alignItems: "center",
    padding: 10,
  },
    boxResultado: {
    width: 250,
    height: "auto",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#06000a",
    alignItems: "end",
    justifyContent: "center",
    marginTop: 150,
  }
})