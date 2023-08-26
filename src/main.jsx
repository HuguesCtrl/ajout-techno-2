import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BackgroundColor from "./themeProvider/backgroundColor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BackgroundColor>
    <App />
  </BackgroundColor>
);
