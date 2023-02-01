import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {/* <Login /> */}
      <Home />
    </ThemeProvider>
  );
}
