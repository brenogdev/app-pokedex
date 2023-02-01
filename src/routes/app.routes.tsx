import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { About } from "../screens/About";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
