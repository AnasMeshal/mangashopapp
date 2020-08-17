//Styled components
import styled from "styled-components";

export const ItemWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 20%
  text-align: center;
  align-items: center;
  border: ${({ theme }) => theme.borderColor} solid 1px;
  background: ${({ theme }) => theme.mainColor};

  :hover {
    background-color: red;
  }
`;

export const MangaName = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const MangaImage = styled.Image`
  width: 30%;
  height: 100%;
  align-items: flex-end;
  align-self: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
`;

// export const ShopImage = styled.img`
//   height: 210px;
//   width: 210px;
//   border-bottom: ${({ theme }) => theme.borderColor} solid 3px;
//   border-radius: 1vw;
// `;
