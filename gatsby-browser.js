import React from "react";

import RootElement from "./src/components/rootElement";

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);
