//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import { Thumbnail, Left, Body, Right } from "native-base";
import { VendorName, VendorDescription, ViewText, ItemList } from "./styles";

const VendorItem = ({ vendor, navigation }) => {
  return (
    <ItemList thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri: vendor.image
              ? vendor.image
              : "https://i.pinimg.com/originals/cc/90/e4/cc90e4029e3d4e063825bae96ea8537f.png",
          }}
        />
      </Left>
      <Body>
        <VendorName>{vendor.name}</VendorName>
        <VendorDescription note numberOfLines={1}>
          Its time to see a difference . .
        </VendorDescription>
      </Body>
      <Right>
        <ViewText
          onPress={() => navigation.navigate("Mangas", { vendor: vendor })}
        >
          View
        </ViewText>
      </Right>
    </ItemList>
  );
};

export default observer(VendorItem);
