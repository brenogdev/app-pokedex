import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "../../../assets/animation-home.json";
import * as Styled from "./styles";

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
      </Styled.Content>
      <Styled.Footer>
        <Styled.Title>Bem vindo</Styled.Title>
        <Styled.Subtitle>Encontre todos os pokémons</Styled.Subtitle>
      </Styled.Footer>
    </Styled.Container>
  );
};
