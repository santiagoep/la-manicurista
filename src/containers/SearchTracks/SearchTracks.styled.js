import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const StyledSearchContainer = styled.div`
  width: 100%;
`;

export const StyledErrorMessage = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.danger};
  margin: ${({ theme }) => theme.utils.spacing(3, 0)};
`;
