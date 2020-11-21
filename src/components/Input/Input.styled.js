import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
  padding: ${({ theme }) => theme.utils.spacing(1, 4)};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 54.84%;
    border: 1px solid ${({ theme }) => theme.searchTrack.colors.inputBorder};
    box-sizing: border-box;
    border-radius: 0 0 20px 20px;
    border-top-style: none;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
