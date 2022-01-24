import React, { useCallback, useEffect, useRef, useState } from "react";
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

function BoligmappaSearch({ onPropertiesSelected }) {

  const getProperties = (searchEvent) =>
    searchEvent.detail.selectedProperties.properties;

  const componentCallback = useCallback((node) => {
    if (node) {
      // In React we have to set the event listener on the DOM node using ref
      node.addEventListener("property-confirmed", (e) => {
        onPropertiesSelected(
          getProperties(e).map((property) => property.boligmappaNumber)
        );
      });
    }
  }, []);

  return (
    <div>
      <boligmappa-search
        ref={componentCallback}
        development={true}
        config={JSON.stringify(searchConfig)}
      ></boligmappa-search>
    </div>
  );
}

BoligmappaSearch.propTypes = {};

export default BoligmappaSearch;
