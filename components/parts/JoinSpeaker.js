var React = require('react');

var JoinSpeaker = React.createClass({
  start(){
    this.props.emit('start', {name: this.speakerName.value, title: this.presentationTitle.value});
  },
  render(){
    return (
      <form action="javascript:void(0)" onSubmit={this.start}>
        <label>Full Name</label>
        <input ref={(ref) => this.speakerName = ref} className="form-control" placeholder="Enter your full name" required />
        <label>Presentation Title</label>
        <input ref={(ref) => this.presentationTitle = ref} className="form-control" placeholder="Enter a title for this presentation" required />
        <button className="btn btn-primary">Join</button>
      </form>
    );
  }
});

module.exports = JoinSpeaker;