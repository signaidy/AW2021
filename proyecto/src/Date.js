class today extends React.Component {
  state={
    myCurrentTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Date">
        <p>Current Date and Time: {this.state.myCurrentTime}</p>
      </div>
    );
  }
}