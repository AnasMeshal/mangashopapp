import React from "react";
import { Text } from "native-base";
import { MangaImage } from "./styles";

const MangaDetail = ({ route }) => {
  const { manga } = route.params;
  return (
    <>
      <MangaImage
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png",
        }}
      />
      <Text>{manga.name}</Text>
      <Text>{manga.price}</Text>
      <Text>{manga.author}</Text>
      <Text>{manga.description}</Text>
    </>
  );
};

export default MangaDetail;
