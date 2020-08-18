import React from "react";

//Components
import CartItem from "../CartItem";

//Stores
import cartStore from "../../stores/cartStore";
import mangaStore from "../../stores/mangaStore";

//Styles
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";

const CartList = () => {
  if (mangaStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...mangaStore.getItemById(item.mangaId),
      qty: item.qty,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
