import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { CartButtonStyled, CartWrapper } from "./styles";
import cartStore from "../../stores/cartStore";
import { Badge, Text, Body } from "native-base";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartWrapper>
      <Body>
        <Badge>
          <Text>{cartStore.totalQuantity}</Text>
        </Badge>
      </Body>
      <CartButtonStyled
        type="AntDesign"
        name="shoppingcart"
        onPress={() => navigation.navigate("Cart")}
      />
    </CartWrapper>
  );
};

export default observer(CartButton);
