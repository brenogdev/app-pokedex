import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background.default};
  `}
`;

export const Content = styled.View`
  height: 70%;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.background.water};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.text.white};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.text.white};
    margin-top: 20px
  `}
`;
