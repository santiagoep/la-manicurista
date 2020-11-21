import styled from "styled-components";

export const StyledContainer = styled.span`
  display: flex;
  position: absolute;
  top: 15%;
  right: 11px;
  transform: rotate(-90deg);
  transform-origin: right;
  ${({ theme }) => theme.breakpoints.md} {
    transform: none;
    top: 0;
    right: 0;
  }
  z-index: 1;
`;

export const StyledItem = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.font.quaternary};
  font-size: ${({ theme }) => theme.font.size.caption};
  padding: ${({ theme }) => theme.utils.spacing(2, 3)};
  margin: ${({ theme }) => theme.utils.spacing(0, 1)};
  border-radius: 15px 15px 0 0;
  height: 15px;
  ${({ theme }) => theme.breakpoints.md} {
    border-radius: 0 0 15px 15px;
  }
`;
