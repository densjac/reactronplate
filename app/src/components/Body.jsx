import React from 'react';
import { Link } from 'react-router-dom'

export default class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Link to="${match.url}/:ciao">TO BODY 2</Link>
      </div>
    )
  }
}
