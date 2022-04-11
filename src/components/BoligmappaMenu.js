import React from "react";
import PropTypes from "prop-types";
import "@boligmappa/web-components/BoligmappaMenu";
import { config } from "./config";

let menuConfig = {
  connectPath: config.connectPath,
};
function BoligmappaMenu(props) {
  return (
    <boligmappa-menu config={JSON.stringify(menuConfig)}></boligmappa-menu>
  );
}

BoligmappaMenu.propTypes = {};

export default BoligmappaMenu;
