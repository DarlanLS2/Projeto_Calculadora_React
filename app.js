import { Text, View, StyleSheet } from 'react-native';
import {BtnAmarelo, BtnRoxo, BtnAzul, BtnC} from "./components/botoes.js";
import {BoxBtn, BoxPrincipal, BoxResultado} from "./components/boxes.js";
import {Titulo, Linha, Resultado} from "./components/textos.js";
import React from "react";

export default function App() {
  let [conta, setConta] = React.useState("")
  return (
    <BoxPrincipal>

      <Titulo texto="Calculadora"></Titulo>
      <Linha></Linha>

      <BoxResultado>
        <Resultado texto="10 + 10"></Resultado>
      </BoxResultado>

      <BoxBtn>
        <BtnAzul conta={conta} setConta={setConta} texto={"0"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"1"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"2"}></BtnAzul>
        <BtnAmarelo conta={conta} setConta={setConta} texto="+"></BtnAmarelo>

        <BtnAzul conta={conta} setConta={setConta} texto={"3"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"4"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"5"}></BtnAzul>
        <BtnAmarelo conta={conta} setConta={setConta} texto="-"></BtnAmarelo>

        <BtnAzul conta={conta} setConta={setConta} texto={"6"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"7"}></BtnAzul>
        <BtnAzul conta={conta} setConta={setConta} texto={"8"}></BtnAzul>
        <BtnAmarelo conta={conta} setConta={setConta} texto="*"></BtnAmarelo>
        
        <BtnC conta={conta} setConta={setConta} texto="C"></BtnC>
        <BtnAzul conta={conta} setConta={setConta} texto={"9"}></BtnAzul>
        <BtnRoxo conta={conta} setConta={setConta} texto="="></BtnRoxo>
        <BtnAmarelo conta={conta} setConta={setConta} texto={"/"}></BtnAmarelo>
      </BoxBtn>

    </BoxPrincipal>
  );
}

