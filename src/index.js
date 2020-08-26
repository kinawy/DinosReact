import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dinosaur from "./Dino";
import * as serviceWorker from "./serviceWorker";

let post = {
  title: "Dino-Mite!",
  author: "Vagrant Velociraptor",
  body: "My sexy Dino Body",
  comments: [
    "Sweet bod Dino-Bro",
    "Dude, Where's my Car?",
    "Bring out your dead!",
    "On second thought, tis a silly place",
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Dinosaur
      title={post.title}
      author={post.author}
      body={post.body}
      comments={post.comments}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
