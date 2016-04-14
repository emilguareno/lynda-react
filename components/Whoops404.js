var React = require('react');
var Link = require('react-router').Link;

var Whoops404 = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>Whoops...</h1>
        <p>We cannot find the page that you have requested.
        Were you looking for one of these? </p>
        
        <ul>
          <li><Link to="/">Join as audience</Link></li>
          <li><Link to="/speaker">Start the presentation</Link></li>
          <li><Link to="/board">View the board</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Whoops404;