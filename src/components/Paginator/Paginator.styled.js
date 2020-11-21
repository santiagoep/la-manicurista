import styled from "styled-components";

const PaginatorContainer = styled.div`
  max-width: 100% !important;
  .paginator-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  .paginator-container ul {
    width: 100%;
  }

  .paginator-container li a:focus {
    outline: none;
    outline-width: 0;
    box-shadow: none;
  }

  .paginator-container li {
    ${({ theme }) => theme.breakpoints.md} {
      color: ${({ theme }) => theme.colors.font.tertiary};
      margin: ${({ theme }) => theme.utils.spacing(2)};
      font-size: ${({ theme }) => theme.font.size.paragraph2};
      font-style: normal;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .paginator-container li a {
    display: none;
    ${({ theme }) => theme.breakpoints.md} {
      display: block;
      padding: ${({ theme }) => theme.utils.spacing(2.5, 3.5)};
    }
  }

  .paginator-container li:first-of-type a,
  .paginator-container li:last-of-type a {
    padding: ${({ theme }) => theme.utils.spacing(2.5, 3.5)};
    display: block;
  }

  .paginator-container li.switch {
    margin: ${({ theme }) => theme.utils.spacing(0, 4)};
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.font.quaternary};
    border-radius: 20px;
    ${({ theme }) => theme.breakpoints.md} {
      margin: ${({ theme }) => theme.utils.spacing(0, 4)};
    }
  }

  .paginator-container li.active {
    display: none;
    ${({ theme }) => theme.breakpoints.md} {
      display: block;
      border: 2px solid ${({ theme }) => theme.colors.borders.active};
      color: ${({ theme }) => theme.colors.font.active};
      border-radius: 20px;
    }
  }
`;

export default PaginatorContainer;
