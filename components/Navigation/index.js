import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import VendorList from "../VendorList";
import MangaList from "../MangaList";
import MangaDetail from "../MangaDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Vendors"
        component={VendorList}
        options={{ title: "Choose a Vendor" }}
      />
      <Screen
        name="Mangas"
        component={MangaList}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
          };
        }}
      />
      <Screen
        name="MangaDetail"
        component={MangaDetail}
        options={({ route }) => {
          const { manga } = route.params;
          return {
            title: manga.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
