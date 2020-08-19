//Styled components
import styled from "styled-components";
import { Container, Thumbnail, Content } from "native-base";

export const BackgorundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const VendorImage = styled.Image`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  height: 100%;
`;

export const MangaListContainer = styled(Container)`
  background-color: transparent;
  padding: 0%;
  margin: 0%;
`;

export const StyledThumbnail = styled(Thumbnail)`
  align-self: center;
  width: 300px;
  height: 300px;
  background-color: black;
`;
