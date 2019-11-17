import React from "react";
import ReactDOM from "react-dom";

import {DrizzleContext} from "@drizzle/react-plugin";
import {Drizzle, generateStore} from "@drizzle/store";

import drizzleOptions from "./drizzleOptions";

import App from "./App";

// configure drizzle
const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <DrizzleContext.Consumer>
      {drizzleContext => {
        return <App drizzleContext={drizzleContext} />;
      }}
    </DrizzleContext.Consumer>
  </DrizzleContext.Provider>,
  document.getElementById("root")
);
