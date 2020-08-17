//Styled components
import styled from "styled-components";

export const ItemWrapper = styled.View`
  text-align: center;
  width: 40%;
  height: 70%;
  align-items: center;
  border: ${({ theme }) => theme.borderColor} solid 1px;
  margin: 4px;
  background: ${({ theme }) => theme.mainColor};
`;

export const VendorImage = styled.Image`
  width: 100%;
  height: 85%;
`;

export const VendorName = styled.Text`
  font-size: 20px;
`;
