//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { Text } from "native-base";

const MangaItem = ({ manga }) => {
  return <Text>{manga.name}</Text>;
};

export default observer(MangaItem);
