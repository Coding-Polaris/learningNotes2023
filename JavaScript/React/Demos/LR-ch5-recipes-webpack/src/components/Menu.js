import React from "react";
import Recipe from "./Recipe";

export default function Menu({ title, recipes }) {
    console.log(`Menu ${title} loaded!`);
    console.log("Menu recipes: ", recipes)
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {
                    recipes.map(
                        (recipe, i) => {
                            return <Recipe {...recipe} />
                        }
                    )
                }
            </div>
        </article>
    );
};
