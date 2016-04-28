var React = require('react');
var Link = require('react-router').Link;

var Join = React.createClass({
  join(){
    this.props.emit('join', {name: this.memberName.value});
  },
  render(){
    return (
      <form action="javascript:void(0)" onSubmit={this.join}>
        <label>Full Name</label>
        <input ref={(ref) => this.memberName = ref} className="form-control" placeholder="Enter your full name" required />
        <button className="btn btn-primary">Join</button>
        <Link to="/speaker"> Join as speaker </Link>
      </form>
    );
  }
});

module.exports = Join;