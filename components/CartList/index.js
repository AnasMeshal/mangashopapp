import React from "react";
import { observer } from "mobx-react";

//Components
import CartItem from "../CartItem";

//Stores
import cartStore from "../../stores/cartStore";
import mangaStore from "../../stores/mangaStore";

//Styles
import { List, Spinner, Content } from "native-base";
import { BackgorundImage } from "./styles";

const CartList = () => {
  if (mangaStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...mangaStore.getItemById(item.mangaId),
      qty: item.qty,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return (
    <BackgorundImage source={require(`../../vendorlist.jpg`)}>
      <Content>
        <List>{cartList}</List>
      </Content>
    </BackgorundImage>
  );
};

export default observer(CartList);
