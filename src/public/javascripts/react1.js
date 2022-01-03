/*
 *
 * This is written in vanilla react
 * just for demonstration.
 *
 */
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/pets")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
      });
  }, []);
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Client Side Rendered by React 1"),
    React.createElement("h4", null, "Pets List"),
    React.createElement(
      "ul",
      null,
      pets.map((pet) => {
        return React.createElement(
          "li",
          {
            key: pet.id
          },
          pet.name
        );
      })
    )
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
