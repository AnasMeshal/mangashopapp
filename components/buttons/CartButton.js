import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { CartButtonStyled } from "./styles";
import { Text } from "native-base";
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>{cartStore.totalQuantity}</Text>
      <CartButtonStyled
        type="AntDesign"
        name="shoppingcart"
        onPress={() => navigation.navigate("Cart")}
      />
    </>
  );
};

export default observer(CartButton);
