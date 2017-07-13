import React, { Component } from 'react';

import loadImage from './Ellipsis.svg'

class Load extends Component {
  render() {

    return (
        <div>
            <img src={loadImage}></img>
        </div>
    );
  }
}

export default Load;