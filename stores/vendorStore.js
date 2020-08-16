//React
import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendor = async () => {
    try {
      const res = await instance.get("/vendors");
      this.vendors = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };
}

decorate(VendorStore, {
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendor();
export default vendorStore;
