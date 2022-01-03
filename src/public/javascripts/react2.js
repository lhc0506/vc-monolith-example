/*
 *
 * This is written in vanilla react
 * just for demonstration.
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import ReactRouterDOM from "react-router-dom";

const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Redirect = ReactRouterDOM.Redirect;
const Link = ReactRouterDOM.Link;

function Home() {
  return React.createElement(
    "div",
    {
      id: "content"
    },
    "This is Home page rendered by React"
  );
}

function About() {
  return React.createElement(
    "div",
    {
      id: "content"
    },
    "This is About page rendered by React"
  );
}

function App() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    BrowserRouter,
    {
      basename: "/react2"
    },
    React.createElement("h3", null, "Client Side Rendered by React 2"),
    React.createElement(
      Link,
      {
        to: "/home"
      },
      "Home"
    ),
    React.createElement(
      Link,
      {
        to: "/about"
      },
      "About"
    ),
    React.createElement(Route, {
      path: "/home",
      component: Home
    }),
    React.createElement(Route, {
      path: "/about",
      component: About
    }),
    React.createElement(Redirect, {
      from: "/",
      to: "/home"
    }),
    React.createElement("p", null, `Count: ${count}`),
    React.createElement(
      "button",
      {
        onClick: () => setCount(count + 1)
      },
      "Increase"
    )
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
