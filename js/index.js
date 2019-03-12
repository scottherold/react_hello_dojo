// Display React Libraries

console.log(React);
console.log(ReactDOM);

const helloDojo = React.createElement("div", null,
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("h2", null, "Things I need to do:"),
    React.createElement("ul", null,
        React.createElement("li", null, "Learn React"),
        React.createElement("li", null, "Climb Mt. Everest"),
        React.createElement("li", null, "Run a marathon"),
        React.createElement("li", null, "Feed the dogs")
    )
);

// ReactDOM allows you to place the newly created element on the DOM using 'render'. The first argument is the object
// you are trying ot render, the second argument is the tag location (id) on the DOM where you want the object rendered
ReactDOM.render(helloDojo, document.getElementById("root"));