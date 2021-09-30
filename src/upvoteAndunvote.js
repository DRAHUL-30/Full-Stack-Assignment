import React, { Component } from "react";
import { Card, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class Post extends Component {
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
    const { content, createdAt, votes } = this.props.post;

    return (
      <div className="post-container">
        <Card>
          <CardText>
            <p className="timestamp">{moment(createdAt).fromNow()}</p>
            {content}
            <div style={{ textAlign: "right" }}>
              <FlatButton
                label="Upvote"
                primary={true}
                disabled={this.state.disabledUpvote}
                onClick={this.handleUpvoteClicked.bind(this)}
              />
              <FlatButton
                label="Downvote"
                secondary={true}
                disabled={this.state.disabledDownvote}
                onClick={this.handleDownvoteClicked.bind(this)}
              />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Post;

{
  /* <>
	<li class="list-group-item">
		<i class="glyphicon glyphicon-chevron-up" onClick="upvote"></i>
		<i class="glyphicon glyphicon-chevron-down" onClick="downvote"></i>
	</li>
</> */
}
