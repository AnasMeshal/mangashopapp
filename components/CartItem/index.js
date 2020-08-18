import React from "react";
import { Text } from "react-native";
import { ListItem, Body, Right, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text>
          {item.price} KD X {item.qty}
        </Text>
        <Text>Total Price: {item.price * item.qty} KD</Text>
      </Body>

      <Icon
        type="Feather"
        name="delete"
        onPress={() => cartStore.deleteItem(item.id)}
      />
    </ListItem>
  );
};

export default CartItem;
