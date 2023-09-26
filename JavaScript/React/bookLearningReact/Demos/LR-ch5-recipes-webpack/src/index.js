import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";

console.log("Loading index!");

ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("root")
);