//React
import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import vendorStore from "../../stores/vendorStore";

//Components
import VendorItem from "../VendorItem";
import SearchBar from "../SearchBar";

//Styles
import { Spinner, List, Content } from "native-base";
import { BackgorundImage } from "./styles";

const VendorList = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const filteredVendor = vendorStore.vendors.filter((vendor) =>
    vendor.name.toUpperCase().includes(query.toUpperCase())
  );

  const vendorList = filteredVendor.map((vendor) => (
    <VendorItem navigation={navigation} vendor={vendor} key={vendor.id} />
  ));

  if (vendorStore.loading) return <Spinner />;

  return (
    <BackgorundImage source={require(`../../vendorlist.jpg`)}>
      <SearchBar setQuery={setQuery} />

      <Content>
        <List>{vendorList}</List>
      </Content>
    </BackgorundImage>
  );
};

export default observer(VendorList);
