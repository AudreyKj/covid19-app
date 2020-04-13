import React from "react";
import ReactDOM from "react-dom";
import Browse from "./browse";
import App from "./app";

let component;

if (location.pathname === "/") {
    component = <Browse />;
} else {
    component = <App />;
}

ReactDOM.render(component, document.querySelector("main"));
