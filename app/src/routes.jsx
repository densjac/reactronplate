import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import App from './components/App.jsx';

export default class Routes extends React.Component{
  	render(){
		return (
			<Router>
				<div className="unselectable">
					<Route exact path="/" component={App}/>
				</div>
			</Router>
		)
  	}
}