import React from "react";
import helpers from "./RecipeHelper";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
    console.log(`Recipe ${name} loaded!`);
    console.log("Recipe: ", name, ingredients, steps);
    return (
        <section id={helpers.idify(name)}>
            <h1>{name}</h1>
            <IngredientList list={ingredients} />
            <Instructions steps={steps} />
        </section>
    );
};