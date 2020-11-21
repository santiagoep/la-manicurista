import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .home__track-detail {
    margin-bottom: ${({ theme }) => theme.utils.spacing(10)};
  }
  ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    .home__track-detail {
      margin-left: ${({ theme }) => theme.utils.spacing(10)};
    }
  }
`;

export const SearchTracksContainer = styled.section`
  order: 2;
  width: 100%;
  ${({ theme }) => theme.breakpoints.md} {
    order: 1;
    max-width: 45%;
  }
`;

export const StyledTrackDetailContainer = styled.section`
  order: 1;
  width: 100%;
  height: 300px;
  ${({ theme }) => theme.breakpoints.md} {
    order: 2;
    max-width: 400px;
    height: 580px;
  }
`;
