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
  StyledButton,
} from "./styles";
import { Body, Text } from "native-base";
import cartStore from "../../stores/cartStore";

const MangaDetail = ({ route }) => {
  const { manga } = route.params;

  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    const newItem = { qty, mangaId: manga.id };
    cartStore.addItemToCart(newItem);
  };

  return (
    <BackgorundImage source={require(`../../solidBlack.jpg`)}>
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
        <NumericInput
          textColor="#fff"
          initValue={1}
          rounded
          minValue="1"
          onChange={setQty}
          value={qty}
        />
        <StyledButton onPress={handleAdd}>
          <Text>Add</Text>
        </StyledButton>
      </Body>
    </BackgorundImage>
  );
};

export default MangaDetail;
