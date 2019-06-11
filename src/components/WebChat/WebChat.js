import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.directLine = new DirectLine({
      token: 'nXd1KVgy4x8.4Nxg-HagwNVKA807YaLOOAboXX--01bFpQrorV_lHeE'
    });
  }

  render() {
    return <ReactWebChat className='kurt' directLine={this.directLine} />;
  }
}
