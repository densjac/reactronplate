import React from 'react';

const logo = require('../images/linentec.png');

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} className="small-image" draggable="false"></img>
      </div>
    )
  }
}
