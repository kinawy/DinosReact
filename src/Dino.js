import React, { Component } from "react";
import Comment from "./Comment.js";
import "./Dino.css";

class Dinosaur extends Component {
  constructor(props) {
    super();
    // Set an initial state prop in your component that contains content or body for posts.
    this.state = {
      body: props.body,
      tempBody: ''
    };
    // LIKE THIS
    // this.handleBodyEdit = this.handleBodyEdit.bind(this)
  }
  // IF YOU DONT USE ARROW FUNCTIONS, YOU HAVE TO BIND YOUR FUNCTION TO THIS IN THE CONSTRUCTOR FUNCTION!!!!
  handleBodyEdit = () => {
    // open an alert that
    // takes a value.
    let enterBody = prompt("Change your body girl");
    console.log(this.state);
    this.setState({ body: enterBody })
    // Take the user inputed value into the alert box and use that return value to update the state of the body or content of your post.
    // Add a button to somewhere in your page (up to you which component to add to!).
    // This button should be onClick
  };

  handleFormEdit = (e) => {
    e.preventDefault()
    this.setState({
      body: this.state.tempBody
    })
  }

  render() {
    let allComments = this.props.comments.map((c) => {
      return <Comment key={c} body={c} />;
    });
    console.log(allComments);
    return (
      <div className={"Dino"}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.author}</h2>
        <h3>{this.state.body}</h3>
        <hr />
        <form onSubmit={this.handleFormEdit}>
          <h5>New Body Content</h5>
          <input type="text" name='body' onChange={e => {this.setState({tempBody: e.target.value})}}/>
          <input type='submit' />
        </form>
        {/* <button onClick={this.handleBodyEdit}>
          Edit the body of this article?
        </button> */}
        <h4>Comments</h4>
        {allComments}
      </div>
    );
  }
}

export default Dinosaur;
