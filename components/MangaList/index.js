//React
import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import MangaItem from "../MangaItem";

//Styles
import { ListWrapper } from "./styles";
import { Content, List, Spinner } from "native-base";

//Stores
import mangaStore from "../../stores/mangaStore";
import SearchBar from "../SearchBar";
import { Text } from "react-native";

const MangaList = ({ route, navigation }) => {
  const { vendor } = route.params;

  const [query, setQuery] = useState("");

  const mangaList = vendor.mangas
    .map((manga) => mangaStore.getItemById(manga.id))
    .filter((manga) => manga.name.toUpperCase().includes(query.toUpperCase()))
    .map((manga) => (
      <MangaItem manga={manga} key={manga.id} navigation={navigation} />
    ));

  if (mangaStore.loading)
    return (
      <Content>
        <Spinner />
      </Content>
    );

  return (
    <>
      <Text>{vendor.name}</Text>
      <SearchBar setQuery={setQuery} />
      <Content>
        <List>{mangaList}</List>
      </Content>
    </>
  );
};

export default observer(MangaList);
