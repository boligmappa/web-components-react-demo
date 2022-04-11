import React from "react";
import PropTypes from "prop-types";
import "@boligmappa/web-components/BoligmappaAuth";
import { config } from "./config";

const authCodeEndpoint = {
  endpointUrl: "https://localhost:5001/tokenProvider/Exchange",
};
let authConfig = {
  clientId: "alpha-client",
  idObject: '{"userId": "martin"}',
  scope: "offline_access",
  authCodeEndpoint: authCodeEndpoint,
  connectPath: config.connectPath,
};

function BoligmappaAuth(props) {
  return (
    <boligmappa-auth
      development="true"
      config={JSON.stringify(authConfig)}
    ></boligmappa-auth>
  );
}

BoligmappaAuth.propTypes = {};

export default BoligmappaAuth;
