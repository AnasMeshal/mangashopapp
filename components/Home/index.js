import React from "react";

//Styles
import { BackgorundImage, CenterButton } from "./styles";
import { Button, Text } from "native-base";

const Home = () => {
  return (
    <BackgorundImage
      source={{
        uri:
          "https://media.playstation.com/is/image/SCEA/playstation-wallpapers_ghost-of-tsushima-mobile-manga-4K-01-ps4-26jun20-en-us?$native_nt$",
      }}
    >
      <CenterButton>
        <Button
          style={{ padding: "10%", alignSelf: "center" }}
          onPress={() => alert("Hello")}
          light
        >
          <Text> Light </Text>
        </Button>
      </CenterButton>
    </BackgorundImage>
  );
};

export default Home;