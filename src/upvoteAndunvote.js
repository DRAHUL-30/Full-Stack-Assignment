import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./updown.css";

class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledUpvote: false,
      disabledDownvote: false,
    };
  }

  handleUpvoteClicked() {
    const downvoteDisabled = this.state.disabledDownvote;

    if (downvoteDisabled == false) {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false,
      });
    } else {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false,
      });
    }
  }

  handleDownvoteClicked() {
    const upvoteDisabled = this.state.disabledUpvote;

    if (upvoteDisabled == false) {
      this.setState({
        disabledDownvote: true,
        disabledUpvote: false,
      });
    } else {
      this.setState({
        disabledDownvote: true,
        disabledUpvote: false,
      });
    }
  }

  render() {
    const { content } = this.state;

    return (
      <div className="post-container">
        {/* <p className="timestamp">{moment(createdAt).fromNow()}</p> */}
        {content}
        <div style={{ textAlign: "right" }}>
          <Button
            className="up"
            label="Upvote"
            primary={true}
            disabled={this.state.disabledUpvote}
            onClick={this.handleUpvoteClicked.bind(this)}
          />
          <Button
            className="down"
            label="Downvote"
            secondary={true}
            disabled={this.state.disabledDownvote}
            onClick={this.handleDownvoteClicked.bind(this)}
          />
          {/* <li class="list-group-item">
            <i
              class="glyphicon glyphicon-chevron-up"
              isabled={this.state.disabledUpvote}
              onClick={this.handleUpvoteClicked.bind(this)}
            ></i>
            <i
              class="glyphicon glyphicon-chevron-down"
              disabled={this.state.disabledDownvote}
              onClick={this.handleDownvoteClicked.bind(this)}
            ></i>
          </li> */}
        </div>
      </div>
    );
  }
}

export default Vote;

