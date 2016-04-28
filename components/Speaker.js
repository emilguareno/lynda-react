var React = require('react');
var Display = require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker');

var Speaker = React.createClass({
  render(){
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
            <p>Questions</p>
            <p>Attendance</p>
          </Display>
          <Display if={!this.props.member.name}>
            <JoinSpeaker emit={this.props.emit} />
          </Display>
        </Display>
      </div>
    );
  }
});

module.exports = Speaker;