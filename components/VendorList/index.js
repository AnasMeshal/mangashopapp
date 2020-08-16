//React
import React from "react";
import { observer } from "mobx-react";

//Stores
import vendorStore from "../../stores/vendorStore";

//Components
import VendorItem from "../VendorItem";

//Styles
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Spinner,
} from "native-base";

const VendorList = () => {
  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} />
  ));

  if (vendorStore.loading)
    return (
      <Content>
        <Spinner />
      </Content>
    );

  return (
    <Content>
      <List>
        <ListItem>
          {vendorList}
          <Icon name="arrow-forward" />
        </ListItem>
      </List>
    </Content>
  );
};

export default observer(VendorList);
