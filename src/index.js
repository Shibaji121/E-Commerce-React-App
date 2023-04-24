import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-center">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ToastProvider>
);
