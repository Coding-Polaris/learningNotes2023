import React from "react";
import helpers from "./RecipeHelper";

export default function IngredientList({ list }) {
    console.log("IngredientList: ", list)
	return (
        <ul classname="ingredient-list">
            {
                list.map(
                    ({ amount, name, measurement }, i) => <li>{amount} {helpers.pluralize(amount, measurement)} {name}</li>
                )
            }
        </ul>
    );
};