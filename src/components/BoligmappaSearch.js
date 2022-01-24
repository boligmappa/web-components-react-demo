import React from "react";
import PropTypes from "prop-types";
import "@boligmappa/web-components/BoligmappaSearch";

const retrieveEndpoint = {
  endpointUrl: "https://localhost:5001/tokenProvider/Retrieve",
};

const searchConfig = {
  idObject: '{"userId": "martin"}',
  retrieveTokenEndpoint: retrieveEndpoint,
  language: "NO",
};

function BoligmappaSearch(props) {
  return (
    <boligmappa-search
      development={true}
      config={JSON.stringify(searchConfig)}
    ></boligmappa-search>
  );
}

BoligmappaSearch.propTypes = {};

export default BoligmappaSearch;
