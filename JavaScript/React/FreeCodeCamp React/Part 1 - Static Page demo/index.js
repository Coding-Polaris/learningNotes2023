// 1st practice line
// ReactDOM is a class with method `render` which appends a JSX expression to a chosen element
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

// 2nd line - Write a ul with 2 lis
ReactDOM.render(
    <ul>
        <li>This is the first item in a list!</li>
        <li>This is the second item in a list!</li>
    </ul>, document.getElementById("root")
);

// Why React? It's Composable!
// 3rd challenge - Create and render an element called MainContent *below* NavBar

// lesson code - Why React? It's Composable!

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Response code:

function MainContent() {
    return (
        <h1 id="main-content">I'm learning React!</h1>
    );
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
);

// 4th challenge - With vanilla JS, replicate the following lesson React code:

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/
// Response code:

const el4 = document.createElement("h1");

// el4.classList.add("header");
// const el4Text = document.createTextNode("This is some text content.");
// el4.appendChild(el4Text);

// I put the above content in based on Googles, but it's actually much simpler to say these:
el4.className = "header";
el4.textContent = "This is some text content.";

const rootEl = document.getElementById("root");
// rootEl.appendChild(el4); // leaving this commented to avoid pollution, but it works

// 5th example: comparing diff between vanilla JS element (from ex. 4) and a React JSX element

const fifthElement = <h1 className="header">This is JSX</h1>;
console.log(el4); // return value is HTML object
console.log(fifthElement); // return value is a JS object:

/*
{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
 */

/*
5/5th Challenge:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// initial response - works, ended up being accurate
function FifthNavbar() {
    return (
        <nav>
            <h1>Coolest Website Ever</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(<FifthNavbar />, rootEl);

// lesson answer code
// very similar, just a variable instead of a function

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

