import React from "react";

const HeadComponents = [
  <script
    key="jquery"
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossOrigin="anonymous"
  />,
  <script
    key="goat1000"
    src="https://www.goat1000.com/jquery.tagcanvas.min.js"
    crossOrigin="anonymous"
  />,
];

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export { onRenderBody };
