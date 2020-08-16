//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { Text } from "native-base";

const VendorItem = ({ vendor }) => {
  return <Text>{vendor.name}</Text>;
};

export default observer(VendorItem);
