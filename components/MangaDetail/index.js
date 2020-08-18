import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

//Styles
import {
  BackgorundImage,
  MangaImage,
  MangaName,
  MangaDescription,
  MangaPrice,
  MangaAuthor,
} from "./styles";
import { Body, Button, Text } from "native-base";
import cartStore from "../../stores/cartStore";

const MangaDetail = ({ route }) => {
  const { manga } = route.params;

  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    const newItem = { qty, mangaId: manga.id };
    cartStore.addItemToCart(newItem);
  };

  return (
    <BackgorundImage source={require(`../../vendorlist.jpg`)}>
      <MangaImage
        source={
          manga.image
            ? {
                uri: manga.image,
              }
            : require(`../../mangacover.jpg`)
        }
      />
      <MangaName>{manga.name}</MangaName>
      <MangaDescription>{manga.description}</MangaDescription>
      <MangaPrice>{manga.price} Kd</MangaPrice>
      <MangaAuthor>author: {manga.author}</MangaAuthor>
      <Body>
        <NumericInput initValue={1} rounded onChange={setQty} value={qty} />
      </Body>
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </BackgorundImage>
  );
};

export default MangaDetail;
