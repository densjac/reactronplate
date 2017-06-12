import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';
import Body2 from './Body2.jsx';

require('./App.scss')

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
				  <div className="unselectable">
            <Route exact path="${this.props.match.url}/:ciao" component={Body2}/>
            <Route exact path={this.props.match.url} component={Body}/>
          </div>
        </Router>
        <Footer/>
      </div>
    )
  }
}
