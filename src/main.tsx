import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import "./index.css";
import { App } from "./App";

import successIcon from "./assets/toast-success.png";
import errorIcon from "./assets/error.png";

axios.defaults.baseURL = import.meta.env.VITE_BACK_URL;

if (localStorage.getItem("jwt")) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
    <ToastContainer
      theme="dark"
      closeOnClick
      hideProgressBar
      pauseOnHover
      pauseOnFocusLoss
      icon={({ type }) =>
        type === "success" ? (
          <img src={successIcon} />
        ) : type === "error" ? (
          <img src={errorIcon} width={38} style={{ padding: "9px" }} />
        ) : undefined
      }
    />
  </StrictMode>
);
