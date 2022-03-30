import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: " ",
      showName : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event){
    this.setState({firstName: event.target.value})
  }

  handleCheck(event){
    const data = {firstName: this.state.firstName};
    event.preventDefault();
    this.setState({showName : true})
    fetch("/result", {
      method:"POST",
      cache: "no-cache",
      headers:{
          "content_type":"application/json",
      },
      body:JSON.stringify(data)
      }
  ).then(response => {
  console.log(data)
  return response.json()
})
.then(json => {
console.log(json)
this.setState({lastName: json})
})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleCheck}>
        <label>
        First Name:
        </label>
        <input type="text" name="firstName" value = {this.state.firstName} onChange = {this.handleChange}/>
        <button type="submit" onClick={this.handleCheck}>
        Submit 
        </button>
        {this.state.showName && <p>{this.state.lastName}</p>}
        </form>

      </div>
    );
  }
}

export default App;