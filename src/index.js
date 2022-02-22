import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import store from "./components/store/index";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
