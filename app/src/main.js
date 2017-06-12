import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';

window.onload = function(){
  ReactDOM.render(<Routes/>, document.getElementById('app'));
}
