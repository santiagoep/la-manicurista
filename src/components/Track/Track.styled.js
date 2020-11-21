import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% -${({ theme }) => theme.utils.spacing(6)});
  padding: ${({ theme }) => theme.utils.spacing(1)};
  margin: ${({ theme }) => theme.utils.spacing(2)};
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
    border-radius: 5px;
  }
`;

export const StyledImage = styled.img`
  width: 45px;
  height: 45px;
`;

export const StyledInfoContainer = styled.div`
  width: calc(100% - ${({ theme }) => theme.utils.spacing(4)});
  margin-left: ${({ theme }) => theme.utils.spacing(4)};
`;

export const StyledName = styled.h2`
  color: ${({ theme }) => theme.colors.font.secondary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.paragraph1};
`;
