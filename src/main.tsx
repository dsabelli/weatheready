import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "virtual:windi.css";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
