import { Text, View, StyleSheet } from 'react-native';
import {BtnAmarelo, BtnRoxo, BtnAzul, BtnC} from "./components/botoes.js";
import {BoxBtn, BoxPrincipal, BoxResultado} from "./components/boxes.js";
import {Titulo, Linha, Resultado} from "./components/textos.js";
import React, {useState} from "react";

export default function App() {
  let [conta, setConta] = useState("")

  let handClick = (value) =>  {
    if (value == "=") {
      resultado()
    } else if (value == "C") {
      clear()
    } else {
      setConta(conta + value);
    }
  }
  let resultado = () => {
    const total = new Function('return ' + conta)();
    setConta(total);
  }
  let clear = () => {
    setConta('');
  };
  return (
    <BoxPrincipal>

      <Titulo texto="Calculadora"></Titulo>
      <Linha></Linha>

      <BoxResultado>
        <Resultado texto={conta}></Resultado>
      </BoxResultado>

      <BoxBtn>
        <BtnAzul texto={"1"} onPress={() => handClick("1")}></BtnAzul>
        <BtnAzul texto={"2"} onPress={() => handClick("2")}></BtnAzul>
        <BtnAzul texto={"3"} onPress={() => handClick("3")}></BtnAzul>
        <BtnAmarelo texto="+" onPress={() => handClick("+")}></BtnAmarelo>

        <BtnAzul texto={"4"} onPress={() => handClick("4")}></BtnAzul>
        <BtnAzul texto={"5"} onPress={() => handClick("5")}></BtnAzul>
        <BtnAzul texto={"6"} onPress={() => handClick("6")}></BtnAzul>
        <BtnAmarelo texto="-" onPress={() => handClick("-")}></BtnAmarelo>

        <BtnAzul texto={"7"} onPress={() => handClick("7")}></BtnAzul>
        <BtnAzul texto={"8"} onPress={() => handClick("8")}></BtnAzul>
        <BtnAzul texto={"9"} onPress={() => handClick("9")}></BtnAzul>
        <BtnAmarelo texto="*" onPress={() => handClick("*")}></BtnAmarelo>
        
        <BtnC texto="C" onPress={() => handClick("C")}></BtnC>
        <BtnAzul texto={"0"} onPress={() => handClick("0")}></BtnAzul>
        <BtnRoxo texto="=" onPress={() => handClick("=")}></BtnRoxo>
        <BtnAmarelo texto={"/"} onPress={() => handClick("/")}></BtnAmarelo>
      </BoxBtn>
    </BoxPrincipal>
  );
}

