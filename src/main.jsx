import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import rootReducer from "./reducer/index";

export default configureStore({
  reducer: { rootReducer },
});

render(<App />, document.getElementById("root"));
