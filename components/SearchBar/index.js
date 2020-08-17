//React
import React from "react";

//Styles
import { Search, SearchWrapper } from "./styles";
import { Input } from "native-base";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchWrapper>
      <Input placeholder="Search" onChangeText={setQuery} />
    </SearchWrapper>
  );
};

export default SearchBar;
