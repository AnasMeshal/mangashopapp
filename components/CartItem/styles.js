//Styled components
import styled from "styled-components/native";

import { Icon, Text, ListItem } from "native-base";

export const DeleteButtonStyled = styled(Icon)`
  color: red;
`;

export const ItemName = styled(Text)`
  color: white;
`;

export const ItemPrice = styled(Text)`
  color: #dae0e2;
`;

export const TotalPrice = styled(Text)`
  color: #dae0e2;
`;

export const ItemList = styled(ListItem)`
  background-color: black;
  margin: 0px;
`;
