//Styled components
import styled from "styled-components";

export const SearchWrapper = styled.View`
  margin-top: 20px;
  border: ${({ theme }) => theme.borderColor} solid 2px;
  background-color: #dae0e2;
  display: flex;
  width: 100%;
  height: 7%;
  justify-content: center;
  text-align: center;
`;

// export const Search = styled.Input`
//   margin-top: 2em;
//   margin-bottom: 2em;
//   width: 400px;
//   font-size: 18px;
//   padding: 11px;
//   border: ${({ theme }) => theme.borderColor} 3px solid;
//   border-radius: 15px;
//   outline: none;
// `;
