import React from 'react';
import { Link } from 'react-router-dom'

export default class Body2 extends React.Component {
  render() {
    return (
      <div className="body">
        <Link to="${match.url}/:">BACK TO HOME</Link>
      </div>
    )
  }
}
