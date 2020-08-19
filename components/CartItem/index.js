import React from "react";
import { Text } from "react-native";

//Styles
import { Body } from "native-base";
import {
  DeleteButtonStyled,
  ItemList,
  ItemName,
  ItemPrice,
  TotalPrice,
} from "./styles";

//Stores/
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ItemList>
      <Body>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>
          {item.price} KD X {item.qty}
        </ItemPrice>
        <TotalPrice>Total Price: {item.price * item.qty} KD</TotalPrice>
      </Body>

      <DeleteButtonStyled
        type="Feather"
        name="delete"
        onPress={() => cartStore.deleteItem(item.id)}
      />
    </ItemList>
  );
};

export default CartItem;
