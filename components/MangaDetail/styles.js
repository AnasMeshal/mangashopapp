//Styled components
import styled from "styled-components";
import { Button } from "native-base";

export const BackgorundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const MangaImage = styled.Image`
  width: 80%;
  height: 40%;
  align-self: center;
  margin-top: 10%;
`;

export const MangaName = styled.Text`
  font-size: 40px;
  text-align: center;
  color: #fff;
  padding-right: 5px;
  padding-left: 5px;
`;

export const MangaDescription = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #dae0e2;
  padding-right: 5px;
  padding-left: 5px;
`;

export const MangaPrice = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #1dd1a1;
  padding-right: 5px;
  padding-left: 5px;
`;

export const MangaAuthor = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #dae0e2;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  align-self: center;
`;
