import React from "react";

//Styles
import { BackgorundImage, CenterButton } from "./styles";
import { Button, Text } from "native-base";

const Home = ({ navigation }) => {
  return (
    <BackgorundImage source={require(`../../home.jpg`)}>
      <CenterButton>
        <Button
          style={{ padding: "10%", alignSelf: "center" }}
          onPress={() => navigation.navigate("Vendors")}
          light
        >
          <Text>Click Here to Skip</Text>
        </Button>
      </CenterButton>
    </BackgorundImage>
  );
};

export default Home;
