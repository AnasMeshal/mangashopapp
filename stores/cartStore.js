//React
import { decorate, observable, computed } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [];

  checkout = async () => {
    try {
      console.log(this.items);
      const res = await instance.post("/checkout", this.items);
      this.items = [];
      await AsyncStorage.removeItem("myCart");
      alert("Thank You for Purchasing With Us!");
    } catch (error) {
      console.log(error);
    }
  };

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.mangaId === newItem.mangaId
    );
    if (foundItem) foundItem.qty += newItem.qty;
    else this.items.push(newItem);

    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  deleteItem = async (itemId) => {
    this.items = this.items.filter((_item) => _item.mangaId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.qty));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
