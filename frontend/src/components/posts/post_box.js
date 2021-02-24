import React from 'react';

class PostBox extends React.Component {
  render() {
    return (
        <div>
            <p>{this.props.text}</p>
        </div>
    );
  }
}

export default PostBox;
