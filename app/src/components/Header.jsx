import React from 'react';

const logo = require('../images/linentec.png');

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="small-image" draggable="false"></img>
      </div>
    )
  }
}
