//React
import React from "react";

import { observer } from "mobx-react";

//Styles
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

const VendorItem = ({ vendor, navigation }) => {
  return (
    <ListItem thumbnail>
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
        <Text>{vendor.name}</Text>
        <Text note numberOfLines={1}>
          Its time to see a difference . .
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text
            onPress={() => navigation.navigate("Mangas", { vendor: vendor })}
          >
            View
          </Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(VendorItem);
