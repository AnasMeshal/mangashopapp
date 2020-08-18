//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { ListItem, Left, Thumbnail, Body, Text } from "native-base";

const MangaItem = ({ manga, navigation }) => {
  return (
    <ListItem
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
        <Text>{manga.name}</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
    </ListItem>
  );
};

export default observer(MangaItem);
