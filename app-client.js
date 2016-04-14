var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var Whoops404 = require('./components/Whoops404');

console.log(NotFoundRoute);

var routes = (
  <Route path="/" component={APP}>
    <IndexRoute component={Audience} />
    <Route path="speaker" component={Speaker} />
    <Route path="board" component={Board} />
    <Route path="*" component={Whoops404} />
  </Route>
);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('react-container'));
