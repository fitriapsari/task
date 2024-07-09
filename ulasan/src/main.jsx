import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReviewProvider } from "./page/context/rekap";

ReactDOM.render(
  <ReviewProvider>
    <App />
  </ReviewProvider>,
  document.getElementById("root")
);
