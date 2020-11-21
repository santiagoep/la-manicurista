import styled from "styled-components";

const NAME = "track";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.utils.spacing(1)};
  margin: ${({ theme }) => theme.utils.spacing(2)};
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme[NAME].colors.hover};
    border-radius: 5px;
  }
`;

export const StyledImage = styled.img`
  width: 45px;
  height: 45px;
`;

export const StyledInfoContainer = styled.div`
  margin-left: ${({ theme }) => theme.utils.spacing(4)};
`;

export const StyledName = styled.h2`
  color: ${({ theme }) => theme[NAME].colors.font};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.paragraph1};
`;
