import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import PaginatorContainer from "./Paginator.styled";

const Paginator = ({ pageCount, ...rest }) =>
  pageCount > 0 ? (
    <PaginatorContainer>
      <ReactPaginate {...rest} pageCount={pageCount} />
    </PaginatorContainer>
  ) : (
    <></>
  );

Paginator.propTypes = {
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  previousClassName: PropTypes.string,
  nextClassName: PropTypes.string,
  breakLabel: PropTypes.string,
  breakClassName: PropTypes.string,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  containerClassName: PropTypes.string,
  subContainerClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  pageCount: PropTypes.number,
};

Paginator.defaultProps = {
  previousLabel: "<",
  nextLabel: ">",
  previousClassName: "switch",
  nextClassName: "switch",
  breakLabel: "...",
  breakClassName: "break-me",
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 1,
  containerClassName: "paginator-container",
  subContainerClassName: "sub-container",
  activeClassName: "active",
  pageCount: 0,
};

export default Paginator;
