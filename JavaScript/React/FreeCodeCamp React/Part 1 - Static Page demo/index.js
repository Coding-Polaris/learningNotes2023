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

// Section 6 - React 17 vs. 18 render syntax


// React 17
// ReactDOM.render(navbar, document.getElementById("root"))

// React 18
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// - or -

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

/* 6th / Section 6 Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// my naive response
const samplePage = (
    <div id="page-content">
        <h1>New Content Drop!</h1>
        <ul>
            <li>Sneakers!</li>
            <li>Jackets!!</li>
            <li>I don't know!!!</li>
        </ul>
    </div>
);

// rootEl.append(samplePage);

// I think this is going to add #page-content as a child to #root - but it won't be part of the React virtual DOM
// So this particular snippet can't be cleaned up by future calls to the React renderer

// I was wrong - I got [object Object]. If I had to guess, that's because React JSX is just JavaScript objects.
// So I think you have to go through the React renderer to get actual HTML output out of JSX stored in variables.

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// since i'm continuing to use CDN, i'll comment out the import statements that would normally go here
// import React from 'react';
// import ReactDOM from 'react-dom/client';

const react18Root = ReactDOM.createRoot(rootEl);
react18Root.render(samplePage);

// Warning: You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.
// Something to keep in mind, I guess -- But it works.

/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// naive solution, but with knowing string interpolation

const reactLogo = (
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="50" height="50" />
);

const header = (
    <h1>Fun facts about React</h1>
);

const list = (
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
)

function Page() {
    return (
        <div id="main-content">
            {reactLogo}
            {header}
            {list}
        </div>
    )
}

// const react18Root = ReactDOM.createRoot("root");
react18Root.render(<Page />);

// It's alive!!!

/**
Challenge:

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// I guess I'll redefine Page here

function PageTwo() {
    return (
        <ol>
            <li>It's well supported!</li>
            <li>There are lots of learning resources!</li>
            <li>It's hireable!</li>
        </ol>
    )
}

react18Root.render(<PageTwo />);

/**
Challenge:

Part 2:
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says:
    "© 20xx <last name here> development. All rights reserved."

 */

function PageThree() {
    return (
        <div id="page-three">
            <header>
                <nav>
                    {reactLogo}
                </nav>
            </header>
            <ol>
                <li>It's well supported!</li>
                <li>There are lots of learning resources!</li>
                <li>It's hireable!</li>
            </ol>
            <footer>
                Not © 2023 Polaris Development. No rights reserved, I wouldn't charge anyone for this lol
            </footer>
        </div>
    )
}

react18Root.render(<PageThree />);

/**
Mini Challenge 1:
Move the `header` element from Page into
its own component called "Header"
*/

function HeaderPageFour() {
    return (
        <header>
            <nav>
                {reactLogo}
                This is page four.
            </nav>
        </header>
    )
}

/**
Challenge:

- Move the `footer` into its own component called "Footer"
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function FooterPageFour() {
    return (
        <footer>
            Not © 2023 Polaris Development. No rights reserved, I wouldn't charge anyone for this lol
        </footer>
    )
}

function MainContentPageFour() {
    return (
        <div id="main-content">
            <h1>Reasons to learn React</h1>
            <ol>
                <li>It's well supported!</li>
                <li>There are lots of learning resources!</li>
                <li>It's hireable!</li>
            </ol>
        </div>
    )
}

function PageFour() {
    return (
        <div>
            <HeaderPageFour />
            <MainContentPageFour />
            <FooterPageFour />
        </div>
    )
}

react18Root.render(<PageFour />);


/**
Challenge:

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function HeaderPageFive() {
    return (
        <header>
            <nav className="nav">
                <img className="react-logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function PageFive() {
    return (
        <div id="page">
            <HeaderPageFive />
            <MainContentPageFour />
            <FooterPageFour />
        </div>
    )
}

react18Root.render(<PageFive />);