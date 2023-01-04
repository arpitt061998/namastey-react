import React from "react";
import ReactDOM from "react-dom/client";
var heading1 = React.createElement("h1",{},"heading1 from Arpit");
var heading2 = React.createElement("h2",{},"heading2");
var container = React.createElement("div",{
    "id": "container"
},[heading1,heading2]);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);