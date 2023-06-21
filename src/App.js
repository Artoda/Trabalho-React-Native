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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Livro" component={SelectedLivro} />
          <Stack.Screen name="Editora" component={SelectedEditora} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};
export default App;
