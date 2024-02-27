// country
// coords
// name
// date
// description
import fireworks from "/src/assets/traveljournal/fireworks.png"
import eola from "/src/assets/traveljournal/eola.png"
import mont from "/src/assets/traveljournal/mont.png"

export default [
    {
        country: "Washington, DC",
        coords: [38.89204056234838, -77.05819406649796],
        name: "Potomac River",
        date: "July 4th, 2023",
        description: `Rent a kayak from the Key Bridge Boathouse and join dozens of other boaters to watch the sun set over iconic monuments.
        The patriotic evening reaches its crescendo with a punchy fireworks display visible above the Washington and Lincoln Memorials!`,
        image: fireworks
    },
    {
        country: "Orlando, FL",
        coords: [28.544440768228792, -81.37069024662678],
        name: "Lake Eola",
        date: "February 3rd, 2023",
        description: `Set among the high-rises of Florida's most famous city, Lake Eola is a favorite of families, waterfowl, and travelers
        in need of a break from the Disney bustle. On just the right days, the lake becomes an enormous mirror for brilliant pink clouds.`,
        image: eola
    },
    {
        country: "Montserrat",
        coords: [16.7712912, -62.2208137],
        name: "Bunkum Bay Beach",
        date: "January 2014",
        description: `The lush, volcanic island of Montserrat is a quiet, little-known getaway, but its beaches offer no less beauty than
        its sisters in the Caribbean. During peak season, the beach features a bar for those who like a little buzz with their tan.`,
        image: mont
    }
]