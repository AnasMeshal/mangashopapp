import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import Home from "./components/Home";
import VendorList from "./components/VendorList";
import MangaList from "./components/MangaList";

const theme = {
  lightTheme: {
    backgroundImage: "/assets/light.jpg",
    textColor: "black",
    borderColor: "black",
    mainColor: "#EAF0F1",
    title: "#fff",
    navColor: "#fff",
    vendorBg: "#f2f2f2",
  },
  darkTheme: {
    backgroundImage: "/assets/dark.jpg",
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
      <View style={styles.container}>
        <Home />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
