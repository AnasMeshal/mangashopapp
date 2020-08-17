import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import RootNavigator from "./components/Navigation";
import VendorList from "./components/VendorList";

const theme = {
  lightTheme: {
    backgroundImage: "./light.jpg",
    textColor: "black",
    borderColor: "black",
    mainColor: "#EAF0F1",
    title: "#fff",
    navColor: "#fff",
    vendorBg: "#f2f2f2",
  },
  darkTheme: {
    backgroundImage: "./dark.jpg",
    textColor: "white",
    borderColor: "white",
    mainColor: "#353b48",
    navColor: "black",
    vendorBg: "#2d3436",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
