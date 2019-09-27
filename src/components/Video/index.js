import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <video 
        controls 
        autoPlay
        src={this.props.src} />
    );
  }
}

export default Video;