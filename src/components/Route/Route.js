import React from "react";
import PropTypes from "prop-types";
import { Route as ReactRoute } from "react-router-dom";

import { childrenProps } from "@utils/common-propTypes";

const Route = ({ exact, path, component, layout: Layout }) => (
  <Layout>
    <ReactRoute path={path} component={component} exact={exact} />
  </Layout>
);

Route.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: childrenProps.isRequired,
  layout: childrenProps,
};

Route.defaultProps = {
  exact: true,
  layout: ({ children }) => <>{children}</>,
};

export default Route;
