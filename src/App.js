import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount(){
    this.fetchPoems()
  }

  fetchPoems = () => {
    fetch('http://localhost:3000/poems')
    .then(r => r.json())
    .then(poems => {
      this.setState({ poems })
    })
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm fetchPoems={this.fetchPoems}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;


// fetch and render poems √
// show/hide form √
// create new poem and post to backend √
// mark poems as read √