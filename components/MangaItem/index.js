//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { Left, Thumbnail, Body, Text } from "native-base";
import { ItemList, MangaName, MangaDescription } from "./styles";

const MangaItem = ({ manga, navigation }) => {
  return (
    <ItemList
      avatar
      onPress={() => navigation.navigate("MangaDetail", { manga: manga })}
    >
      <Left>
        <Thumbnail
          source={
            manga.image
              ? {
                  uri: manga.image,
                }
              : require(`../../mangacover.jpg`)
          }
        />
      </Left>
      <Body>
        <MangaName>{manga.name}</MangaName>
        <MangaDescription note>
          Doing what you like will always keep you happy . .
        </MangaDescription>
      </Body>
    </ItemList>
  );
};

export default observer(MangaItem);
