var React = require('react');
var Display = require('./parts/Display');
var Join = require('./parts/Join');
var Audience = React.createClass({
  render(){
    return (
      <Display if={this.props.status === 'connected'}>
        <h1> Join the session </h1>
        <Join />
      </Display>
    );
  }
});

module.exports = Audience;