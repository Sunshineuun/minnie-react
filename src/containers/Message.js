/*
   Message 主页
*/
import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <h3>Message{this.props.match.params.id}</h3>
    );
  }
}

export default Message;