//React
import React from "react";
import { observer } from "mobx-react";

//Components
import MangaItem from "../MangaItem";

//Styles
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Spinner,
} from "native-base";

//Stores
import mangaStore from "../../stores/mangaStore";

const MangaList = () => {
  const mangaList = mangaStore.mangas.map((manga) => (
    <MangaItem manga={manga} key={manga.id} />
  ));

  if (mangaStore.loading)
    return (
      <Content>
        <Spinner />
      </Content>
    );

  return (
    <Content>
      <List>
        <ListItem>
          {mangaList}
          <Icon name="arrow-forward" />
        </ListItem>
      </List>
    </Content>
  );
};

export default observer(MangaList);
