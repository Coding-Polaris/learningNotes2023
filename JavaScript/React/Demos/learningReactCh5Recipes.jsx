const sizes = ["small", "med", "large"];

const helpers = { // DRYing string manipulation
    idify: (string) => { name.toLowerCase().replace(/ /g, "-") },
    isSize: (measurement) => sizes.include(measurement),
    listify: (arr, elType) => arr.map((item, i) => (
        <{elType} key={i}>{item.name}</{elType}>
    ),
    pluralize: ({ amount, measurement }) => (
        isSize(measurement)
            ? (amount == 1 ? measurement : `{measurement}s`)
            : measurement
    )
};

const data = [
    {
        name: "Baked Salmon",
        ingredients: [
            { name: "Salmon", amount: 1, measurement: "lb" },
            { name: "Pine nuts", amount: 1, measurement: "cup" },
            { name: "Butter lettuce, chopped", amount: 2, measurement: "cup" },
            { name: "Yellow squash", amount: 1, measurement: "med" },
            { name: "Olive oil", amount: 0.5, measurement: "cup" },
            { name: "Garlic", amount: 3, measurement: "clove" },
        ],
        steps: [
            "Preheat oven to 350 degrees",
            "Spread olive oil on glass baking dish",
            "Add yellow squash. Bake for 30 minutes",
            "Add salmon, garlic, and pine nuts",
            "Bake for an additional 15 minutes",
            "Remove from oven; serve with lettuce"
        ]
    },
    {
        name: "Fish Tacos",
        ingredients: [
            { name: "Whitefish", amount: 1, measurement: "lb" },
            { name: "Cheese", amount: 1, measurement: "cup" },
            { name: "Iceberg Lettuce", amount: 2, measurement: "cup" },
            { name: "Tomatoes", amount: 2, measurement: "large" },
            { name: "Tortillas", amount: 3, measurement: "med" },
        ],
        steps: [
            "Cook fish on grill until hot",
            "Place fish on tortillas",
            "Top with lettuce, tomatoes, and cheese"
        ]
    }
];

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={helpers.idify(name)}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {helpers.listify(ingredients, "li")}
            </ul>
            <section classname="instructions">
                <h2>Cooking Instructions</h2>
                {helpers.listify(steps, "p")}
            </section>
        </section>
    );
};

function Menu({ title, recipes }) {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                )}
            </div>
        </article>
    );
};

ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("root")
);