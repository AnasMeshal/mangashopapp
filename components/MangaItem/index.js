//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { ItemWrapper, MangaName, MangaImage } from "./styles";
import {
  Icon,
  Right,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const MangaItem = ({ manga, navigation }) => {
  return (
    <ListItem
      avatar
      onPress={() => navigation.navigate("MangaDetail", { manga: manga })}
    >
      <Left>
        <Thumbnail
          source={{
            uri: manga.image
              ? manga.image
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png",
          }}
        />
      </Left>
      <Body>
        <Text>{manga.name}</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
    </ListItem>
  );
};

export default observer(MangaItem);
