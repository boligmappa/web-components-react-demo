import React from "react";
import PropTypes from "prop-types";
import "@boligmappa/web-components/BoligmappaConnect";
import { config } from "./config";

let connectConfig = {
  connectPath: config.connectPath,
};

function BoligmappaConnect(props) {
  return (
    <boligmappa-connect
      config={JSON.stringify(connectConfig)}
      development="true"
    ></boligmappa-connect>
  );
}

BoligmappaConnect.propTypes = {};

export default BoligmappaConnect;
