import React from "react";
import PropTypes from "prop-types";
import "@boligmappa/web-components/BoligmappaConnect";

function BoligmappaConnect(props) {
  return <boligmappa-connect development="true"></boligmappa-connect>;
}

BoligmappaConnect.propTypes = {};

export default BoligmappaConnect;
