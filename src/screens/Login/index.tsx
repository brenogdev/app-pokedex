import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "../../../assets/animation-home.json";
import * as Styled from "./styles";

export const Login = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.WrapperIcon>
          <Styled.IconContent>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
          </Styled.IconContent>
        </Styled.WrapperIcon>

        <Styled.Title>Pokédex</Styled.Title>
        <Styled.SubTitle>
          Encontre todos os pokémons em um só lugar
        </Styled.SubTitle>
      </Styled.Content>

      <Styled.Bottom>
        <Styled.Button onPress={() => {}}>
          <Styled.ButtonText>Entrar</Styled.ButtonText>
        </Styled.Button>
      </Styled.Bottom>
    </Styled.Container>
  );
};
