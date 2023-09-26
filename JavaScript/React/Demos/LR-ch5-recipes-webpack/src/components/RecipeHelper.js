import React from "react";

const sizes = ["small", "med", "large"];

const helpers = { // DRYing string manipulation
    idify: (string) => { name.toLowerCase().replace(/ /g, "-") },
    isSize: (measurement) => sizes.includes(measurement),
    listify: (arr, elType) => arr.map(
        (item, i) => (
            React.createElement(elType, {}, item)
        )
    ),
    pluralize: ({ amount, measurement }) => (
        helpers.isSize(measurement)
            ? (amount == 1 ? measurement : `{measurement}s`)
            : measurement
    )
};

export default helpers;