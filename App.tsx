import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
