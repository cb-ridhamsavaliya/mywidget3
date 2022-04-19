import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const WidgetElements = document.getElementsByClassName("blog_widget");
Array.from(WidgetElements).forEach((element) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App domElement={element} />
    </React.StrictMode>
  );
});

