import styled, { css } from "styled-components";

const PaginatorContainer = styled.div`
  .paginator-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  .paginator-container li a:focus {
    outline: none;
    outline-width: 0;
    box-shadow: none;
  }

  .paginator-container li {
    color: ${({ theme }) => theme.searchTrack.paginator.colors.font};
    margin: ${({ theme }) => theme.utils.spacing(2)};
    font-size: ${({ theme }) => theme.font.size.paragraph2};
    font-style: normal;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paginator-container li a {
    padding: ${({ theme }) => theme.utils.spacing(2.5, 3.5)};
  }

  .paginator-container li.switch {
    background-color: ${({ theme }) =>
      theme.searchTrack.paginator.colors.controls};
    color: ${({ theme }) => theme.searchTrack.paginator.colors.controlsFont};
    border-radius: 20px;
  }

  .paginator-container li.active {
    border: 2px solid
      ${({ theme }) => theme.searchTrack.paginator.colors.active};
    color: ${({ theme }) => theme.searchTrack.paginator.colors.active};
    border-radius: 20px;
  }
`;

export default PaginatorContainer;
