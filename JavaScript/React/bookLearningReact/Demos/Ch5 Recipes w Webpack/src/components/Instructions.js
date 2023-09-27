import React from "react";
import helpers from "./RecipeHelper";

export default function Instructions({ title="Cooking instructions", steps }) {
    console.log("Instructions:", title, steps);
	return (
        <section classname="instructions">
            <h2>{title}</h2>
            {
                helpers.listify(
                    steps.map(
                        (step, i) => `${step}.`
                    ), "p"
                )
            }
        </section>
    );
};