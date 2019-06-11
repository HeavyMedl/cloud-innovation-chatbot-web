import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';
import craigPic from '../../images/craig-jelinek.png'

const styleOptions = {
  botAvatarImage: craigPic
 }

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.directLine = new DirectLine({
      token: '4AWpL9lhMYw.lzxO8vAJwXBIvTEhVbuI-sEA45eGk67Px04tzn9bWcU'
    });

  }

  render() {
    return <ReactWebChat directLine={this.directLine} styleOptions={styleOptions} />;
  }
}
