import styled from "styled-components";

export const StyledTitleContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.searchTrack.colors.titleBg};
`;

export const SearchTracksContainer = styled.section`
  margin: 0 auto;
  width: 500px;
`;
