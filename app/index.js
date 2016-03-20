/* React components should be FIRST

Focused
Independent
Reusable
Small
Testable
*/

//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes')

ReactDom.render(
  routes,
  document.getElementById('app')
)
