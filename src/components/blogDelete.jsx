// junk???// This will be an individual post to display when the image is clicked on

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  
import React, { Component } from "react";

import Posts from "./Posts";
import "../App.css";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.post = props.post;
    // console.log(props);
  }

  render() {
    // Conditionally display the posts ony if they are populated
    return (
      <div
        className="mb-2"
        style={{
          border: "solid",
          borderWidth: "5px",
          borderColor: "pink",
          borderRadius: "1px",
        }}
      >
        {this.post.blogName && (
          <div>
            <div className="mt-3 d-flex  justify-content-evenly">
              <h4>{this.post.blogName}</h4>
              <h4>{this.post.blogDate}</h4>
              <h4>Rating: {this.post.rating}</h4>
            </div>
            <hr style={{ color: "grey" }}></hr>
            <h5>{this.post.comments}</h5>
            <hr style={{ color: "grey" }}></hr>
          </div>
        )}
      </div>
    );
  }
}
