<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Cats!</title>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script type="text/javascript" src="https://unpkg.com/@babel/standalone@7.22.20/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script data-plugins="transform-modules-umd" type="text/babel" data-presets="react" data-type="module">
            function Cat({ name }) {
                return <h1>`The cat's name is {name}`</h1>;
            };

            const rootNode = document.getElementById("root");
            const root = ReactDOM.createRoot(rootNode);
            root.render(<Cat name="Jungle" />);
        </script>
    </body>
</html>