//React
import React from "react";

//Styles
import { Input, Item, Icon, Header } from "native-base";

const SearchBar = ({ setQuery }) => {
  return (
    <Header searchBar rounded transparent>
      <Item style={{ backgroundColor: "#fff" }}>
        <Icon name="ios-search" />
        <Input placeholder="Search" onChangeText={setQuery} />
        <Icon name="book" />
      </Item>
    </Header>
  );
};

export default SearchBar;
