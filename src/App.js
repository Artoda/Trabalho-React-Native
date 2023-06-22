import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DataProvider } from "./context/DataContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SelectedLivro from "./pages/Livros";
import SelectedEditora from "./pages/Editoras";

const Stack = createStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Login",
              headerStyle: {
                backgroundColor: "#DA70D6",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              title: "Livraria",
              headerStyle: {
                backgroundColor: "#DA70D6",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: "Livro",
              headerStyle: {
                backgroundColor: "#DA70D6",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            name="Livro"
            component={SelectedLivro}
          />
          <Stack.Screen
            options={{
              title: "Editora",
              headerStyle: {
                backgroundColor: "#DA70D6",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            name="Editora"
            component={SelectedEditora}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};
export default App;
