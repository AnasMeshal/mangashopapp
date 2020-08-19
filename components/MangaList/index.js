//React
import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import MangaItem from "../MangaItem";

//Styles
import { StyledThumbnail, BackgorundImage } from "./styles";
import { Content, List, Spinner } from "native-base";

//Stores
import mangaStore from "../../stores/mangaStore";
import SearchBar from "../SearchBar";

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
    <BackgorundImage source={require(`../../vendorlist.jpg`)}>
      <SearchBar setQuery={setQuery} />

      <Content>
        <StyledThumbnail
          square
          large
          source={
            vendor.image
              ? {
                  uri: vendor.image,
                }
              : require(`../../mangashop.png`)
          }
        />

        <List>{mangaList}</List>
      </Content>
    </BackgorundImage>
  );
};

export default observer(MangaList);
