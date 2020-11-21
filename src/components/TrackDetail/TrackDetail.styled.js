import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  ${({ showBorder, theme }) =>
    showBorder &&
    css`
      border: 1px solid ${theme.colors.borders.secondary};
      height: 100%;
      width: 100%;
    `}
`;

export const StyledSelectATrack = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.h6};
`;

export const StyledErrorMessage = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.tertiary};
  margin: ${({ theme }) => theme.utils.spacing(3, 0)};
`;
