var React = require('react');
var Display = require('./parts/Display');

var Audience = React.createClass({
  render(){
    return (
      <Display if={this.props.status === 'connected'}>
        <h1> Join the session </h1>
      </Display>
    );
  }
});

module.exports = Audience;