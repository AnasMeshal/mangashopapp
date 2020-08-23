import React from "react";
import { observer } from "mobx-react";
import { Alert } from "react-native";

//Components
import CartItem from "../CartItem";

//Stores
import cartStore from "../../stores/cartStore";
import mangaStore from "../../stores/mangaStore";
import authStore from "../../stores/authStore";

//Styles
import { List, Spinner, Content, Button, Text } from "native-base";
import { BackgorundImage } from "./styles";

const CartList = ({ navigation }) => {
  if (mangaStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...mangaStore.getItemById(item.mangaId),
      qty: item.qty,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  const handleCheckout = () => {
    if (authStore.user) cartStore.checkout();
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before completing your order",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <BackgorundImage source={require(`../../vendorlist.jpg`)}>
      <Content>
        <List>{cartList}</List>
        <Button block onPress={handleCheckout}>
          <Text>Checkout</Text>
        </Button>
      </Content>
    </BackgorundImage>
  );
};

export default observer(CartList);
