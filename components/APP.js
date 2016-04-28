var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
var APP = React.createClass({
  getInitialState(){
    return {
      status: 'disconnected',
      title: '',
      member: {},
      audience: [],
      speaker: ''
    };
  },
  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.updateState);
    this.socket.on('joined', this.joined);
    this.socket.on('audience', this.updateAudience);
    this.socket.on('start', this.updateState);
  },
  joined(member){
    sessionStorage.member = JSON.stringify(member);
    this.setState({member: member});
  },
  updateAudience(newAudience){
    this.setState({audience: newAudience});
  },
  connect(){
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
    if(member){
      this.emit('join', member);
    }
    this.setState({status: 'connected'});
  },
  disconnect(){
    this.setState({status: 'disconnected'});
  },
  updateState(serverState){
    this.setState(serverState);
  },
  emit(eventName, payload){
    this.socket.emit(eventName, payload);
  },
  getChildrenWithProps() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {...this.state, emit: this.emit});
    });
  },
  render(){
      return (
        <div>
          <Header {...this.state} />
          {this.getChildrenWithProps()}
        </div>
      );
  }
});

module.exports = APP;