import styled from "styled-components";

export const StyledContainer = styled.main`
  position: relative;
  width: 99vw;
  margin: 0 auto;
`;

export const StyledTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bg.tertiary};
  order: 0;
  ${({ theme }) => theme.breakpoints.md} {
    order: 0;
  }
`;
